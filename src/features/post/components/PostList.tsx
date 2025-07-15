import * as S from "./Post.styles";
import { usePosts } from "@/api/hooks/usePosts";
import type { Post } from "@/api/graphql/generated/hooks";
import PostItem from "./PostItem";
import Pagination from "@/components/ui/pagination/Pagination";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";

const PostList = () => {
  const { state } = usePosts();

  return (
    <S.Wrapper>
      <S.GroupList>
        <S.List>
          {state.posts
            ?.filter((item): item is Post => item !== undefined)
            .map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
        </S.List>
        <Pagination
          pageSize={10}
          current={1}
          total={state.totalCount ?? 0}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
        />
      </S.GroupList>
    </S.Wrapper>
  );
};

export default PostList;
