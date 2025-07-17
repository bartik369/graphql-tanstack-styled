import type { PostActions } from "@/features/post/types/post";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import * as S from './PostControls.styles';

interface PostActionsProps<T> {
    actions: PostActions;
    post: T;
    getId: (item:T) => string | undefined;
}

const PostControls = <T,>({ actions, post, getId }: PostActionsProps<T>) => {
    return (
        <S.PostControls>
          <S.StyledButton
            onClick={() => actions.update(getId(post) || '')}
            type="text"
            icon={<EditOutlined />}
          />
          <S.DeleteButton
            onClick={() => actions.delete(getId(post) || "")}
            type="text"
            icon={<DeleteOutlined />}
          />
        </S.PostControls>
    );
};

export default PostControls;