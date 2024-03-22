import { RouteObject } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Dashboard } from "../pages/dashboard";
import { Base } from "../pages/base";

export const routes = [
  {
    path: "/",
    Component: Login,
  },
  {
    path: "dashboard",
    Component: Base,
  },
] satisfies RouteObject[];
