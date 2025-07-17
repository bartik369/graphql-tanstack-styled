import type { Post } from "@/api/graphql/generated/hooks";
import {
  UserOutlined,
  MessageOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import type { PostActions } from "../types/post";
import PostControls from "@/shared/components/PostControls/PostControls";
import * as S from "./Post.styles";

interface PostItemProps {
  actions: PostActions;
  post: Post;
}

const PostItem = ({ post, actions }: PostItemProps) => {
  return (
    <S.CardInfo>
      <S.Title>{post.title}</S.Title>
      <S.UserInfo>
        <S.CustomAvatar icon={<UserOutlined />} />
        <S.UserName>{post.user?.name}</S.UserName>
      </S.UserInfo>
      <S.Content>
        <S.StyledImg>
          <PictureOutlined style={{ fontSize: "35px", color: "#424856" }} />
        </S.StyledImg>
        <S.Text>{post.body}</S.Text>
      </S.Content>
      <S.ButtonsGroup>
        <S.InteractionButtons>
          <S.StyledButton
            onClick={() => actions.handleRefetchComments(post.id || "")}
            type="text"
            icon={<MessageOutlined />}
          >
            {post.comments?.data?.length}
          </S.StyledButton>
        </S.InteractionButtons>
        <PostControls
          actions={actions}
          post={post}
          getId={(item) => item.id || ""}
        />
      </S.ButtonsGroup>
    </S.CardInfo>
  );
};

export default PostItem;
