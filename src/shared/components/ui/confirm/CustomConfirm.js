import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Popconfirm } from "antd";
import { CustomConfirmStyles } from "./Confirm.styles";
export const CustomConfirm = (props) => {
    return (_jsxs(_Fragment, { children: [_jsx(CustomConfirmStyles, {}), _jsx(Popconfirm, { ...props, overlayClassName: `custom-confirm ${props.overlayClassName || ""}` })] }));
};
