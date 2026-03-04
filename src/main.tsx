import { createRoot } from "react-dom/client";
import "@/assets/styles/index.css";
import App from "@/app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { AntdProvider } from "./app/providers/AntdProvider";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <AntdProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AntdProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
