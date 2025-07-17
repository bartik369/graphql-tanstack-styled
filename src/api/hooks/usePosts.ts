import { useReducer } from "react";
import {
  useGetPostsQuery,
  useGetCommentsByIdQuery,
} from "../graphql/generated/hooks";
import {
  initialPostState,
  postReducer,
} from "@/features/post/model/PostReducer";
import { PostActionTypes } from "@/features/post/model/PostTypes";

export function usePosts() {
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const { data } = useGetPostsQuery({
    options: {
      paginate: { page: 1, limit: 10 },
    },
  });
  const { data: commentsData, isLoading: isLoadingComments } =
    useGetCommentsByIdQuery(
      { postId: state.fetchedPostId },
      { enabled: !!state.fetchedPostId }
    );

  const handleRefetchComments = (id: string) => {
    dispatch({ type: PostActionTypes.SET_FETCHED, payload: true });
    dispatch({ type: PostActionTypes.SET_FETCHED_POST, payload: id });
  };
  const stepBack = () => {
    dispatch({ type: PostActionTypes.RESET_FETCHED });
  };

  const updatePost = (id: string) => {
    console.log(id);
  };
  const deletePost = (id: string) => {
    console.log(id);
  };
  const handleLike = (id: string) => {
    dispatch({ type: PostActionTypes.INCREMENT_LIKE, payload: id });
  };
  return {
    state: {
      likes: state.likes,
      posts: data?.posts?.data,
      comments: commentsData?.post?.comments?.data,
      totalCount: data?.posts?.meta?.totalCount,
      fetched: state.fetched,
      isLoadingComments,
    },
    actions: {
      handleRefetchComments,
      handleLike,
      update: updatePost,
      delete: deletePost,
      stepBack,
    },
  };
}
