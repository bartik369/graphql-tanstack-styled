import { jsx as _jsx } from "react/jsx-runtime";
import MainPage from "@/pages/main";
const MainConfig = {
    title: 'Main',
    path: '/',
    element: _jsx(MainPage, {}),
    requireAuth: false,
};
export default MainConfig;
