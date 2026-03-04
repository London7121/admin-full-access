import { Segmented, theme } from "antd";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitcher = () => {
  const { token } = theme.useToken();
  const { mode, setMode } = useTheme();

  return (
    <Segmented
      value={mode}
      onChange={(value) => setMode(value as "light" | "dark")}
      options={[
        {
          label: "☀️",
          value: "light",
        },
        {
          label: "🌙",
          value: "dark",
        },
      ]}
      style={{
        background: token.colorBgLayout,
      }}
    />
  );
};

export default ThemeSwitcher;
