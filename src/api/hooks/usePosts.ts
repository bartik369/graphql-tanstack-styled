import { useGetPostsQuery } from "../graphql/generated/hooks";

export function usePosts() {
    const { data, isLoading, error: fetchError } = useGetPostsQuery();

    return { data }
}