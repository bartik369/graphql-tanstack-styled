import { Spin } from "antd";
import PostItem from "./PostItem";
import NoData from "@/shared/components/ui/nodata/NoData";
import Pagination from "@/components/ui/pagination/Pagination";
import CommentItem from "@/features/post/components/CommentItem";
import DynamicForm from "@/shared/components/forms/dynamic/DynamicForm";
import { usePosts } from "@/api/hooks/usePosts";
import type { Post } from "@/api/graphql/generated/graphqlzero/types";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";
import { MESSAGES } from "@/shared/constants/messages";
import { TITLES } from "@/shared/constants/titles";
import { LeftOutlined } from "@ant-design/icons";
import { postFromFields } from "@/shared/components/forms/dynamic/config/formFields";
import { StyledToastContainer } from "@/shared/styles/ToastStyles";
import * as S from "./Post.styles";

const PostList = () => {
  const { state, actions, setters } = usePosts();
  
  return (
    <S.Wrapper>
      <StyledToastContainer position="top-center" />
      {state.isOpen ? (
        <S.CustomModal
          open={state.isOpen}
          onCancel={actions.closeModal}
          footer={null}
          title={TITLES.updatePost}
        >
          <DynamicForm
            fields={postFromFields}
            state={state.post}
            actions={actions}
            onChange={actions.handleInputChange}
          />
        </S.CustomModal>
      ) : null}
      <S.GroupList $isOpen={state.fetched}>
      <S.Header>{TITLES.posts}</S.Header>
        {state.isLoadingPosts ? (
          <Spin tip={MESSAGES.loading} size="large" />
        ) : state.fetchPostErrors ? (
          <span>{MESSAGES.errorFetchData}</span>
        ) : !state?.posts?.length ? (
          <NoData />
        ) : (
          <S.List>
            {state.posts
              ?.filter((item): item is Post => item !== undefined)
              .map((post) => (
                <PostItem
                  key={post.id}
                  post={post}
                  actions={actions}
                  setIsOpen={actions.openModal}
                />
              ))}
          </S.List>
        )}
        <Pagination
          pageSize={state.pageSize}
          current={state.currentPage}
          total={state.totalCount ?? 0}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          onChange={(page) => {
            setters.setPage(page);
          }}
        />
      </S.GroupList>
      <S.CommentsList $isOpen={state.fetched}>
        {state.isLoadingComments ? (
          <Spin tip={MESSAGES.loading} size="large" />
        ) : (
          <>
            <S.HeaderWrapper>
              <S.ButtonBack icon={<LeftOutlined />} onClick={actions.stepBack} />
              <S.Header>{TITLES.comments}</S.Header>
            </S.HeaderWrapper>
            {state.comments?.map((comment) => (
              <CommentItem
                key={comment?.id}
                actions={actions}
                comment={comment || {}}
                likes={state.likes}
              />
            ))}
          </>
        )}
      </S.CommentsList>
    </S.Wrapper>
  );
};

export default PostList;
