import { useTheme } from "@/shared/hooks/useTheme";
import { Space, Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import * as S from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Space direction="vertical">
      <S.CustomSwitch
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="theme-switch"
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </Space>
  );
};

export default ThemeToggle;
