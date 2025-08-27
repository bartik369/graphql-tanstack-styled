import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
const LazyPost = lazy(() => import("@/pages/posts"));
const PostsConfig = {
    title: "Posts",
    path: "posts",
    element: (_jsx(Suspense, { fallback: _jsx(Spin, {}), children: _jsx(LazyPost, {}) })),
    requireAuth: false,
};
export default PostsConfig;
