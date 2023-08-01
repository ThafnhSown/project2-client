import Layout from "../../../../components/Layout/index";
import { Outlet } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Problems from "./pages/Problems/Problems";
import RequireAuth from "../../../../routes/RequireAuth";
import { USER_ROLE } from "../../../../constant";
import React from "react";
import IndProblem from "./pages/IndProblem/IndProblem";
import HomePage from "./pages/Home";
import AddProblem from "./pages/AddProblem";

export const userRouteList = [
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/problem",
        element: <Problems />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/problem/:pid",
        element: <IndProblem />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Layout>
        <RequireAuth allowedRoles={[USER_ROLE.ADMIN]}>
          <Outlet />
        </RequireAuth>
      </Layout>
    ),
    children: [
      {
        path: "add",
        element: <AddProblem />,
      },
    ],
  },
];
