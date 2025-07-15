import type { Post } from "@/api/graphql/generated/hooks";
import { Avatar } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  MessageOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import * as S from "./Post.styles";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <S.CardInfo>
      <S.Title>{post.title}</S.Title>
      <S.UserInfo>
        <Avatar size="default" icon={<UserOutlined />} />
        <S.UserName>{post.user?.name}</S.UserName>
      </S.UserInfo>
      <S.Text>{post.body}</S.Text>
      <S.ButtonsGroup>
        <S.InteractionButtons>
          <S.StyledButton type="text" icon={<HeartOutlined />} />
          <S.StyledButton type="text" icon={<MessageOutlined />}>
            12
          </S.StyledButton>
        </S.InteractionButtons>
        <S.PostActions>
          <S.StyledButton type="text" icon={<EditOutlined />} />
          <S.StyledButton type="text" icon={<DeleteOutlined />} />
        </S.PostActions>
      </S.ButtonsGroup>
    </S.CardInfo>
  );
};

export default PostItem;
