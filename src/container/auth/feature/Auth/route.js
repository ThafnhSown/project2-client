import Layout from "../../../../components/Layout/index";
import { Outlet } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

export const authRouteList = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
        children: [],
      },
      {
        path: "/signup",
        element: <Signup />,
        children: [],
      },
    ],
  },
];
