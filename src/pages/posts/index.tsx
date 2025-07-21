import PostList from '@/features/post/components/PostList';
import PageLayout from '@/shared/layouts/page-layout';

const PostPage = () => {
    return (
        <>
        <PageLayout>
            <PostList />
        </PageLayout>     
        </>
    );
};

export default PostPage;