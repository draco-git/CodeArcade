import { RouteObject } from "react-router-dom";
import { Login } from "../components/login/Login";

export const routes = [
  {
    path: "/",
    Component: Login,
  },
] satisfies RouteObject[];
