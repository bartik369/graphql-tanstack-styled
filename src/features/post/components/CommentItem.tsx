import type { Comment } from "@/api/graphql/generated/graphql";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import type { PostActions } from "../types/post";
import * as S from "./Comment.styles";

interface CommentProps {
  likes: Record<string, number>;
  comment: Comment;
  actions: PostActions;
}
const CommentItem = ({ comment, actions, likes }: CommentProps) => {
  return (
    <S.StyledCard>
      <S.GroupedUserInfo>
        <S.CustomAvatar />
        <S.UserInfo>
          <S.CustomName>{comment.name}</S.CustomName>
          <S.CustomEmail>{comment.email}</S.CustomEmail>
        </S.UserInfo>
      </S.GroupedUserInfo>
      <S.CustomText>{comment.body}</S.CustomText>
      <S.ButtonsGroup>
        <S.FavoriteButton
          onClick={() => actions.handleLike(comment.id || "")}
          $favorite={likes[comment.id!] > 0}
          type="text"
          icon={likes[comment.id!] > 0 ? <HeartFilled /> : <HeartOutlined />}
        >
          <S.Count>
            {likes[comment.id!] > 0 ? likes[comment.id!] : null}
          </S.Count>
        </S.FavoriteButton>
      </S.ButtonsGroup>
    </S.StyledCard>
  );
};

export default CommentItem;
