import PostItem from "./PostItem";
import { Spin } from "antd";
import Pagination from "@/components/ui/pagination/Pagination";
import CommentItem from "@/features/post/components/CommentItem";
import { usePosts } from "@/api/hooks/usePosts";
import type { Post } from "@/api/graphql/generated/hooks";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";
import { MESSAGES } from "@/shared/constants/messages";
import { LeftOutlined } from "@ant-design/icons";
import * as S from "./Post.styles";
import { useModal } from "@/shared/hooks/useModal";
import { Modal } from "antd";
import DynamicForm from "@/shared/components/forms/dynamic/DynamicForm";
import { TITLES } from "@/shared/constants/titles";
import { postFromFields } from "@/shared/components/forms/dynamic/config/formFields";

const PostList = () => {
  const { state, actions } = usePosts();
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <S.Wrapper>
      {isOpen ? (
        <Modal
          open={isOpen}
          onCancel={closeModal}
          footer={null}
          title={TITLES.updatePost}
        >
          <DynamicForm 
            fields={postFromFields} 
            state={state.post} 
            onChange={actions.handleInputChange} 
          />
        </Modal>
      ) : null}
      <S.GroupList $isOpen={state.fetched}>
        <S.List>
          {state.posts
            ?.filter((item): item is Post => item !== undefined)
            .map((post) => (
              <PostItem
                key={post.id}
                post={post}
                actions={actions}
                setIsOpen={openModal}
              />
            ))}
        </S.List>
        <Pagination
          pageSize={10}
          current={1}
          total={state.totalCount ?? 0}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
        />
      </S.GroupList>
      <S.CommentsList $isOpen={state.fetched}>
        {state.isLoadingComments ? (
          <Spin tip={MESSAGES.loading} size="large" />
        ) : (
          <>
            <S.ButtonBack icon={<LeftOutlined />} onClick={actions.stepBack} />
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
