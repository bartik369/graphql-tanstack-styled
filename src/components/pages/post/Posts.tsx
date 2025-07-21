import PostList from '@/features/post/components/PostList';
import * as S from './Posts.styles';

const Posts = () => {
    return (
        <S.PostsWrapper>
          <PostList />
        </S.PostsWrapper>
    );
};

export default Posts;