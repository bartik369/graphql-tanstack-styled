import { jsx as _jsx } from "react/jsx-runtime";
import PostList from '@/features/post/components/PostList';
import * as S from './Posts.styles';
const Posts = () => {
    return (_jsx(S.PostsWrapper, { children: _jsx(PostList, {}) }));
};
export default Posts;
