import { useCallback, useMemo, useReducer } from "react";
import { toast } from "react-toastify";
import {
  useGetPostsQuery,
  useGetCommentsByIdQuery,
  useUpdatePostMutation,
  type GetPostsQuery,
  useDeletePostMutation,
} from "../graphql/generated/hooks";
import { useModal } from "@/shared/hooks/useModal";
import {
  initialPostState,
  postReducer,
} from "@/features/post/model/PostReducer";
import { PostActionTypes } from "@/features/post/model/PostTypes";
import { queryClient } from "@/lib/queryClient";
import type { Post } from "../graphql/generated/graphql";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";
import { TOAST_MESSAGES } from "@/features/todo/constants/toastMessages";

export function usePosts() {
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const { data, isLoading: isLoadingPosts, error: fetchPostErrors } = useGetPostsQuery({
    options: {
      paginate: { page: state.page, limit: 10 },
    },
  });
  const { isOpen, openModal, closeModal } = useModal();

  const dataKey = useMemo(
    () => [
      "GetPosts",
      { options: { paginate: { page: state.page, limit: state.pageSize } } },
    ],
    [state.page, state.pageSize]
  );

  const { data: commentsData, isLoading: isLoadingComments, error: fetchCommentsErrors } =
    useGetCommentsByIdQuery(
      { postId: state.fetchedPostId },
      { enabled: !!state.fetchedPostId }
    );

  const updatePostMutation = useUpdatePostMutation({
    onMutate: async ({ id, input }) => {
      dispatch({ type: PostActionTypes.RESET_ERROR });
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetPostsQuery>(dataKey);

      queryClient.setQueryData(dataKey, (oldData?: any) => {
        if (!oldData?.posts?.data) return oldData;
        return {
          ...oldData,
          posts: {
            ...oldData.posts,
            data: oldData?.posts?.data.map((post: Post) =>
              post.id === id ? { ...post, ...input } : post
            ),
          },
        };
      });
      return { previousPost: previousData?.posts?.data ?? [] };
    },
    onError: async (err, _variables, context) => {
      dispatch({
        type: PostActionTypes.SET_ERROR,
        payload: (err as Error).message,
      });
      toast((err as Error).message);
      if (context?.previousPost) {
        queryClient.setQueryData(dataKey, {
          posts: context.previousPost,
        });
      }
    },
    onSuccess: async () => {
      closeModal();
      toast.success(TOAST_MESSAGES.updatedPost);
    },
    // onSettled: async() => {

    // }
  });

  const deletePostMutation = useDeletePostMutation({
    onMutate: async ({ id }) => {
      dispatch({ type: PostActionTypes.RESET_ERROR });
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetPostsQuery>(dataKey);
      queryClient.setQueryData(dataKey, (oldData: any) => {
        if (!oldData?.posts?.data) return oldData;
        return {
          ...oldData,
          posts: {
            ...oldData.posts,
            data: oldData.posts.data.filter((item: Post) => item.id !== id),
          },
        };
      });
      return { previousPosts: previousData?.posts?.data ?? [] };
    },
    onError: async (err, _variables, context) => {
      toast.error(getErrorMessage(err));
      dispatch({
        type: PostActionTypes.SET_ERROR,
        payload: (err as Error).message,
      });
      if (context?.previousPosts) {
        queryClient.setQueryData(dataKey, {
          posts: context.previousPosts,
        });
      }
    },
    onSuccess: async () => {
      toast.success(TOAST_MESSAGES.deletedPost);
    },
    // onSettled: async() => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // }
  });

  const handleRefetchComments = (id: string) => {
    dispatch({ type: PostActionTypes.SET_FETCHED, payload: true });
    dispatch({ type: PostActionTypes.SET_FETCHED_POST, payload: id });
  };

  const handleInputChange = (values: Partial<typeof state.post>) => {
    dispatch({
      type: PostActionTypes.UPDATE_POST,
      payload: values,
    });
  };

  const stepBack = () => {
    dispatch({ type: PostActionTypes.RESET_FETCHED });
  };

  const updatePost = useCallback(
    async (id: string) => {
      const currentPosts = queryClient.getQueryData<GetPostsQuery>(dataKey);
      const post = currentPosts?.posts?.data?.find((item) => item?.id === id);
      if (!post) return;

      dispatch({ type: PostActionTypes.SET_IS_UPDATE, payload: true });
      dispatch({
        type: PostActionTypes.SET_POST,
        payload: {
          id: post?.id,
          title: post?.title,
          body: post?.body,
        },
      });
    },
    [dataKey]
  );

  const submitPost = async (values: Partial<Post>) => {
    if (!state.post.id) return;
    await updatePostMutation.mutateAsync({
      id: state.post.id,
      input: {
        title: values.title,
        body: values.body,
      },
    });
  };

  const deletePost = useCallback(
    async (id: string) => {
      await deletePostMutation.mutateAsync({ id });
    },
    [deletePostMutation]
  );

  const handleLike = (id: string) => {
    dispatch({ type: PostActionTypes.INCREMENT_LIKE, payload: id });
  };
  const handleResetPost = () => {
    dispatch({ type: PostActionTypes.RESET_POST });
    dispatch({ type: PostActionTypes.RESET_IS_UPDATE });
  };

  return {
    state: {
      isOpen,
      isUpdate: state.isUpdate,
      post: state.post,
      likes: state.likes,
      posts: data?.posts?.data,
      comments: commentsData?.post?.comments?.data,
      totalCount: data?.posts?.meta?.totalCount,
      currentPage: state.page,
      pageSize: state.pageSize,
      fetched: state.fetched,
      isLoadingComments,
      isLoadingPosts,
      fetchCommentsErrors,
      fetchPostErrors,
    },
    actions: {
      handleRefetchComments,
      handleInputChange,
      handleResetPost,
      handleLike,
      submit: submitPost,
      update: updatePost,
      delete: deletePost,
      reset: handleResetPost,
      stepBack,
      openModal,
      closeModal,
    },
    setters: {
      setPage: (page: number) =>
        dispatch({
          type: PostActionTypes.SET_PAGE,
          payload: page,
        }),
    },
  };
}
