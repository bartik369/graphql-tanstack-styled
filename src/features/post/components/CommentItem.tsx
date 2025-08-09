import type { Comment } from "@/api/graphql/generated/graphqlzero/types";
import { HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
import type { PostActionsBase } from "../types/post";
import * as S from "./Comment.styles";

interface CommentProps {
  likes: Map<string, number>;
  comment: Comment;
  actions: PostActionsBase;
}
const CommentItem = ({ comment, actions, likes }: CommentProps) => {
  const likedCount = likes.get(comment.id || '') || 0;
  const isLiked = likedCount > 0;

  return (
    <S.StyledCard>
      <S.GroupedUserInfo>
        <S.CustomAvatar icon={<UserOutlined />} />
        <S.UserInfo>
          <S.CustomName>{comment.name}</S.CustomName>
          <S.CustomEmail>{comment.email}</S.CustomEmail>
        </S.UserInfo>
      </S.GroupedUserInfo>
      <S.CustomText>{comment.body}</S.CustomText>
      <S.ButtonsGroup>
        <S.FavoriteButton
          onClick={() => actions.handleLike(comment.id || "")}
          $favorite={isLiked}
          type="text"
          icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
        >
          <S.Count>
            {isLiked ? likedCount : null}
          </S.Count>
        </S.FavoriteButton>
      </S.ButtonsGroup>
    </S.StyledCard>
  );
};

export default CommentItem;
