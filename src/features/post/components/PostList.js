import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Spin } from "antd";
import PostItem from "./PostItem";
import NoData from "@/shared/components/ui/nodata/NoData";
import Pagination from "@/components/ui/pagination/Pagination";
import CommentItem from "@/features/post/components/CommentItem";
import DynamicForm from "@/shared/components/forms/dynamic/DynamicForm";
import { usePosts } from "@/api/hooks/usePosts";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";
import { MESSAGES } from "@/shared/constants/messages";
import { TITLES } from "@/shared/constants/titles";
import { LeftOutlined } from "@ant-design/icons";
import { postFromFields } from "@/shared/components/forms/dynamic/config/formFields";
import { StyledToastContainer } from "@/shared/styles/ToastStyles";
import * as S from "./Post.styles";
const PostList = () => {
    const { state, actions, setters } = usePosts();
    return (_jsxs(S.Wrapper, { children: [_jsx(StyledToastContainer, { position: "top-center" }), state.isOpen ? (_jsx(S.CustomModal, { open: state.isOpen, onCancel: actions.closeModal, footer: null, title: TITLES.updatePost, children: _jsx(DynamicForm, { fields: postFromFields, state: state.post, actions: actions, onChange: actions.handleInputChange }) })) : null, _jsxs(S.GroupList, { "$isOpen": state.fetched, children: [_jsx(S.Header, { children: TITLES.posts }), state.isLoadingPosts ? (_jsx(Spin, { tip: MESSAGES.loading, size: "large" })) : state.fetchPostErrors ? (_jsx("span", { children: MESSAGES.errorFetchData })) : !state?.posts?.length ? (_jsx(NoData, {})) : (_jsx(S.List, { children: state.posts
                            ?.filter((item) => item !== undefined)
                            .map((post) => (_jsx(PostItem, { post: post, actions: actions, setIsOpen: actions.openModal }, post.id))) })), _jsx(Pagination, { pageSize: state.pageSize, current: state.currentPage, total: state.totalCount ?? 0, pageSizeOptions: PAGE_SIZE_OPTIONS, onChange: (page) => {
                            setters.setPage(page);
                        } })] }), _jsx(S.CommentsList, { "$isOpen": state.fetched, children: state.isLoadingComments ? (_jsx(Spin, { tip: MESSAGES.loading, size: "large" })) : (_jsxs(_Fragment, { children: [_jsxs(S.HeaderWrapper, { children: [_jsx(S.ButtonBack, { icon: _jsx(LeftOutlined, {}), onClick: actions.stepBack }), _jsx(S.Header, { children: TITLES.comments })] }), state.comments?.map((comment) => (_jsx(CommentItem, { actions: actions, comment: comment || {}, likes: state.likes }, comment?.id)))] })) })] }));
};
export default PostList;
