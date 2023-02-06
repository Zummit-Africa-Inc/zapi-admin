import { Routes, Route } from "react-router-dom";

import { Api, Apis, Feedback, Home, Login, User, Users } from "./pages"
import { Auth } from "./components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route element={<Auth />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/api" element={<Apis />} />
          <Route path="/api/:id" element={<Api />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
      </Route>
    </Routes>
  );
}

export default Router;