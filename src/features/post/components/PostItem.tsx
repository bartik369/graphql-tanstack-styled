import type { Post } from "@/api/graphql/generated/hooks";
import { Avatar } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  MessageOutlined,
  EditOutlined,
  DeleteOutlined,
  PictureOutlined,
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
        <S.CustomAvatar icon={<UserOutlined />} />
        <S.UserName>{post.user?.name}</S.UserName>
      </S.UserInfo>
      <S.Content>
      <S.StyledImg>
        <PictureOutlined style={{ fontSize:'35px', color:'#424856'}} />
      </S.StyledImg>
      <S.Text>{post.body}</S.Text>
      </S.Content>
      <S.ButtonsGroup>
        <S.InteractionButtons>
          <S.FavoriteButton $favorite={true} type="text" icon={<HeartOutlined />} />
          <S.StyledButton type="text" icon={<MessageOutlined />}>
            12
          </S.StyledButton>
        </S.InteractionButtons>
        <S.PostActions>
          <S.StyledButton type="text" icon={<EditOutlined />} />
          <S.DeleteButton type="text" icon={<DeleteOutlined />} />
        </S.PostActions>
      </S.ButtonsGroup>
    </S.CardInfo>
  );
};

export default PostItem;
