import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "@/shared/hooks/useTheme";
import { Space } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import * as S from "./ThemeToggle.styles";
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (_jsx(Space, { direction: "vertical", children: _jsx(S.CustomSwitch, { checked: theme === "dark", onChange: toggleTheme, className: "theme-switch", checkedChildren: _jsx(MoonOutlined, {}), unCheckedChildren: _jsx(SunOutlined, {}) }) }));
};
export default ThemeToggle;
