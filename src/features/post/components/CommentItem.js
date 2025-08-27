import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
import * as S from "./Comment.styles";
const CommentItem = ({ comment, actions, likes }) => {
    const likedCount = likes.get(comment.id || '') || 0;
    const isLiked = likedCount > 0;
    return (_jsxs(S.StyledCard, { children: [_jsxs(S.GroupedUserInfo, { children: [_jsx(S.CustomAvatar, { icon: _jsx(UserOutlined, {}) }), _jsxs(S.UserInfo, { children: [_jsx(S.CustomName, { children: comment.name }), _jsx(S.CustomEmail, { children: comment.email })] })] }), _jsx(S.CustomText, { children: comment.body }), _jsx(S.ButtonsGroup, { children: _jsx(S.FavoriteButton, { onClick: () => actions.handleLike(comment.id || ""), "$favorite": isLiked, type: "text", icon: isLiked ? _jsx(HeartFilled, {}) : _jsx(HeartOutlined, {}), children: _jsx(S.Count, { children: isLiked ? likedCount : null }) }) })] }));
};
export default CommentItem;
