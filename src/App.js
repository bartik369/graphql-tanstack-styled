import { jsx as _jsx } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./app/router/PublicRoutes";
import publicRoutes from "./config/routes/publicRoutes";
import "@/shared/styles/theme.scss";
import "./App.css";
function App() {
    return (_jsx(Routes, { children: _jsx(Route, { element: _jsx(PublicRoutes, {}), children: publicRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))) }) }));
}
export default App;
