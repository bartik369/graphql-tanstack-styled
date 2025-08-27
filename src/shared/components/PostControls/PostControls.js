import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import * as S from './PostControls.styles';
const PostControls = ({ actions, post, getId, setIsOpen }) => {
    return (_jsxs(S.PostControls, { children: [_jsx(S.StyledButton, { onClick: () => {
                    actions.update(getId(post) || '');
                    setIsOpen?.(true);
                }, type: "text", icon: _jsx(EditOutlined, {}) }), _jsx(S.DeleteButton, { onClick: () => actions.delete(getId(post) || ""), type: "text", icon: _jsx(DeleteOutlined, {}) })] }));
};
export default PostControls;
