import { Api, Feedback, User, Home } from "../pages";

export const adminRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <User />,
  },
  {
    path: "/apis",
    element: <Api />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
];
