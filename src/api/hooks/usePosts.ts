import { useCallback, useMemo, useReducer } from "react";
import {
  useGetPostsQuery,
  useGetCommentsByIdQuery,
  useUpdatePostMutation,
  type GetPostsQuery,
} from "../graphql/generated/hooks";
import {
  initialPostState,
  postReducer,
} from "@/features/post/model/PostReducer";
import { PostActionTypes } from "@/features/post/model/PostTypes";
import { queryClient } from "@/lib/queryClient";

export function usePosts() {
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const { data } = useGetPostsQuery({
    options: {
      paginate: { page: 1, limit: 10 },
    },
  });

  const dataKey = useMemo(() => ["GetPosts",
      { options: { paginate: { page: state.page, limit: state.pageSize } } },
  ], [state.page, state.pageSize]);
   
  const { data: commentsData, isLoading: isLoadingComments } =
    useGetCommentsByIdQuery(
      { postId: state.fetchedPostId },
      { enabled: !!state.fetchedPostId }
    );
  
    const updatePostMutation = useUpdatePostMutation({
      onMutate: async() => {
      },
      onError: async() => {

      },
      onSuccess: async() => {

      },
      onSettled: async() => {
        
      }
    })

  const handleRefetchComments = (id: string) => {
    dispatch({ type: PostActionTypes.SET_FETCHED, payload: true });
    dispatch({ type: PostActionTypes.SET_FETCHED_POST, payload: id });
  };

  const handleInputChange = (values: Partial<typeof state.post>) => {
    dispatch({
      type: PostActionTypes.UPDATE_POST,
      payload: values
    })
  }

  const stepBack = () => {
    dispatch({ type: PostActionTypes.RESET_FETCHED });
  };

  const updatePost = useCallback(async (id: string) => {
    const currentPosts = queryClient.getQueryData<GetPostsQuery>(dataKey);
    const post = currentPosts?.posts?.data?.find((item) => item?.id === id);
    dispatch({
      type: PostActionTypes.SET_POST,
      payload: {
        id: post?.id,
        title: post?.title,
        body: post?.body,
      }
    });
    // await updatePostMutation.mutateAsync({
    //   id,
    //   input: {
    //     body:
    //   }
    // });
  }, [dataKey]);
  console.log(state.post)

  const deletePost = (id: string) => {
    console.log(id);
  };

  const handleLike = (id: string) => {
    dispatch({ type: PostActionTypes.INCREMENT_LIKE, payload: id });
  };

  return {
    state: {
      post: state.post,
      likes: state.likes,
      posts: data?.posts?.data,
      comments: commentsData?.post?.comments?.data,
      totalCount: data?.posts?.meta?.totalCount,
      fetched: state.fetched,
      isLoadingComments,
    },
    actions: {
      handleRefetchComments,
      handleInputChange,
      handleLike,
      update: updatePost,
      delete: deletePost,
      stepBack,
    },
  };
}
