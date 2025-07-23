import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./app/router/PublicRoutes";
import publicRoutes from "./config/routes/publicRoutes";
import "@/shared/styles/theme.scss";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
