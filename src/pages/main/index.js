import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Main from '@/components/pages/main/Main';
import PageLayout from '@/shared/layouts/page-layout';
const MainPage = () => {
    return (_jsx(_Fragment, { children: _jsx(PageLayout, { children: _jsx(Main, {}) }) }));
};
export default MainPage;
