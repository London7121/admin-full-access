import { useTheme } from "@/hooks/useTheme";
import { ConfigProvider, theme } from "antd";
import type { PropsWithChildren } from "react";

export const AntdProvider = ({ children }: PropsWithChildren) => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          // 🔴 Primary Brand
          colorPrimary: isDark ? "#ef4444" : "#dc2626",

          // Radius
          borderRadius: 10,
          borderRadiusLG: 14,

          // Typography
          fontFamily: "Inter, sans-serif",
          fontSize: 14,

          // Backgrounds
          colorBgBase: isDark ? "#0b0b0f" : "#fafafa",
          colorBgLayout: isDark ? "#0b0b0f" : "#f5f5f5",
          colorBgContainer: isDark ? "#14141a" : "#ffffff",

          // Borders
          colorBorder: isDark ? "#2a2a33" : "#fca5a5",

          // Text
          colorText: isDark ? "#f4f4f5" : "#1f2937",
          colorTextSecondary: isDark ? "#a1a1aa" : "#6b7280",
        },

        components: {
          Button: {
            colorPrimary: isDark ? "#ef4444" : "#dc2626",
            borderRadius: 8,
          },

          Menu: {
            itemSelectedBg: isDark ? "rgba(239,68,68,0.15)" : "#fee2e2",
            itemSelectedColor: isDark ? "#ef4444" : "#dc2626",
          },

          Layout: {
            headerBg: isDark ? "#14141a" : "#ffffff",
            siderBg: isDark ? "#0b0b0f" : "#ffffff",
          },

          Table: {
            headerBg: isDark ? "#1c1c24" : "#fef2f2",
            rowHoverBg: isDark ? "rgba(239,68,68,0.08)" : "#fee2e2",
          },

          Card: {
            borderRadiusLG: 14,
          },

          Input: {
            borderRadius: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
