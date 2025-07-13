import { Routes, Route, HashRouter as Router} from "react-router-dom";
import PublicRoutes from "./app/router/PublicRoutes";
import publicRoutes from "./config/routes/publicRoutes";
import "./App.css";

function App() {
  return (
    <Router>
    <Routes>
      <Route element={<PublicRoutes />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
