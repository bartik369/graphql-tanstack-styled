import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserOutlined, MessageOutlined, PictureOutlined, } from "@ant-design/icons";
import PostControls from "@/shared/components/PostControls/PostControls";
import * as S from "./Post.styles";
const PostItem = ({ post, actions, setIsOpen }) => {
    return (_jsxs(S.CardInfo, { children: [_jsx(S.Title, { children: post.title }), _jsxs(S.UserInfo, { children: [_jsx(S.CustomAvatar, { icon: _jsx(UserOutlined, {}) }), _jsx(S.UserName, { children: post.user?.name })] }), _jsxs(S.Content, { children: [_jsx(S.StyledImg, { children: _jsx(PictureOutlined, { style: { fontSize: "35px", color: "#424856" } }) }), _jsx(S.Text, { children: post.body })] }), _jsxs(S.ButtonsGroup, { children: [_jsx(S.InteractionButtons, { children: _jsx(S.StyledButton, { type: "text", icon: _jsx(MessageOutlined, {}), onClick: () => actions.handleRefetchComments(post.id || ""), children: post.comments?.data?.length }) }), _jsx(PostControls, { setIsOpen: setIsOpen, actions: actions, post: post, getId: (item) => item.id || "" })] })] }));
};
export default PostItem;
