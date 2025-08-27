import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import PostList from '@/features/post/components/PostList';
import PageLayout from '@/shared/layouts/page-layout';
const PostPage = () => {
    return (_jsx(_Fragment, { children: _jsx(PageLayout, { children: _jsx(PostList, {}) }) }));
};
export default PostPage;
