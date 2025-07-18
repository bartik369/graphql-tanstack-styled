import type { PostActions } from "@/features/post/types/post";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import * as S from './PostControls.styles';

interface PostActionsProps<T> {
    actions: PostActions;
    post: T;
    getId: (item:T) => string | undefined;
    setIsOpen?: (isOpen:boolean) => void;
}

const PostControls = <T,>({ actions, post, getId, setIsOpen }: PostActionsProps<T>) => {
    return (
        <S.PostControls>
          <S.StyledButton
            onClick={() => {
              actions.update(getId(post) || '')
              setIsOpen?.(true)
            }}
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