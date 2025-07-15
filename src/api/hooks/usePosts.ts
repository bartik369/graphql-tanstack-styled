import { useGetPostsQuery } from "../graphql/generated/hooks";

export function usePosts() {
    const { 
        data, 
        isLoading, 
        error: fetchError 
    } = useGetPostsQuery({ options: {
        paginate: { page: 1, limit: 10}
    }});
    return { 
        state: {
            posts: data?.posts?.data,
            totalCount: data?.posts?.meta?.totalCount,
        }
     }
}