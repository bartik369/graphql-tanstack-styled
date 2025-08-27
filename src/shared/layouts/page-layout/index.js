import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../header";
import Footer from "../footer";
import { ErrorBoundary } from "react-error-boundary";
import LocalFallback from "@/shared/components/ui/error/LocalFallback";
import * as S from "./PageLayout.styles";
const PageLayout = ({ children }) => {
    return (_jsxs(S.Wrapper, { children: [_jsx(Header, {}), _jsx(S.CustomMain, { children: _jsx(ErrorBoundary, { FallbackComponent: LocalFallback, children: children }) }), _jsx(Footer, {})] }));
};
export default PageLayout;
