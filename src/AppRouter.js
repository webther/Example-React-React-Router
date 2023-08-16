import React from 'react';
import { createBrowserRouter } from "react-router-dom"

import FullLayout from "./pages/layout/FullLayout"
import PlainLayout from "./pages/layout/PlainLayout"

const AppRouter = createBrowserRouter([
  {
    element: <FullLayout />,
    children: [
      {
        path: "",
        lazy: () => import("./pages/home/HomeIndex")
      },
      {
        path: "about",
        lazy: () => import("./pages/about/AboutIndex")
      },
      {
        path: "example",
        children: [
          {
            path: "",
            lazy: () => import("./pages/example/ExampleIndex")
          },
          {
            path: "example1",
            lazy: () => import("./pages/example/Example1")
          },
          {
            path: "example2",
            lazy: () => import("./pages/example/Example2")
          },
          {
            path: "example3",
            lazy: () => import("./pages/example/Example3")
          },
          {
            path: "*",
            lazy: () => import("./pages/status/Status404")
          },
        ],
      },
      {
        path: "dashboard",
        children: [
          {
            path: "",
            lazy: () => import("./pages/dashboard/DashboardIntroduction")
          },
          {
            path: "introduction",
            lazy: () => import("./pages/dashboard/DashboardIntroduction")
          },
          {
            path: ":uid",
            lazy: () => import("./pages/dashboard/DashboardUser")
          },
          {
            path: ":uid/product/:productId",
            lazy: () => import("./pages/dashboard/DashboardUserProduct")
          }
        ],
      },

    ]
  },
  {
    element: <PlainLayout />,
    children: [
      {
        path: "*",
        lazy: () => import("./pages/status/Status404")
      },
      {
        path: "user/login",
        lazy: () => import("./pages/user/UserLogin")
      },
      {
        path: "user/logout",
        lazy: () => import("./pages/user/UserLogout")
      },
    ]
  }
], {
  basename: "/",
})

export default AppRouter
