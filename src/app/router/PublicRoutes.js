import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
const PublicRoutes = () => {
    return (_jsx(_Fragment, { children: _jsx(Outlet, {}) }));
};
export default PublicRoutes;
