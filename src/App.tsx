import { Routes, Route } from "react-router-dom";
import { adminRoutes } from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {adminRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
