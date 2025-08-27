import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@ant-design/v5-patch-for-react-19";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LocalFallback from "./shared/components/ui/error/LocalFallback";
// const redirectPath = sessionStorage.redirect;
// if (redirectPath) {
//   sessionStorage.removeItem("redirect");
//   window.history.replaceState(null, '', redirectPath);
// }
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(ErrorBoundary, { FallbackComponent: LocalFallback, children: _jsx(App, {}) }), _jsx(ReactQueryDevtools, { initialIsOpen: false })] }) }) }));
