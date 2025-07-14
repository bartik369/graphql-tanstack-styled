import { useGetPostsQuery } from "../graphql/generated/hooks";

export function usePosts() {
    const { data
     } = useGetPostsQuery();

    return { data }
}