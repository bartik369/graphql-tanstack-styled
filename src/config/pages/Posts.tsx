import { lazy, Suspense } from "react";
import { Spin } from "antd";

const LazyPost = lazy(() => import("@/pages/posts"));

const PostsConfig = {
  title: "Posts",
  path: "posts",
  element: (
    <Suspense fallback={<Spin />}>
      <LazyPost />
    </Suspense>
  ),
  requireAuth: false,
};

export default PostsConfig;
