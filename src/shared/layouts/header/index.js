import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from "./Navigation";
import * as S from './Header.styles';
import ThemeToggle from "@/shared/components/theme/ThemeToggle";
const Header = () => {
    return (_jsxs(S.Header, { children: [_jsx(Navigation, {}), _jsx(ThemeToggle, {})] }));
};
export default Header;
