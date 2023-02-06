import { lazy } from "react";

const Api = lazy(() => import("./Api"));
const Apis = lazy(() => import("./Apis"));
const Feedback = lazy(() => import("./Feedback"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const User = lazy(() => import("./User"));
const Users = lazy(() => import("./Users"));

export {
    Api, Apis, Feedback, Home, Login, User, Users
}