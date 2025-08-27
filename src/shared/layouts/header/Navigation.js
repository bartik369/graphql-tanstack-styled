import { jsx as _jsx } from "react/jsx-runtime";
import { NAVIGATION_ROUTES } from '@/shared/config/navigation';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from './Navigation.styles';
const Navigation = () => {
    const items = NAVIGATION_ROUTES.map(({ path, label }) => ({
        key: path,
        label: _jsx(Link, { to: path, children: label })
    }));
    const { pathname } = useLocation();
    return (_jsx(S.CustomMenu, { mode: 'horizontal', selectedKeys: [pathname], items: items }));
};
export default Navigation;
