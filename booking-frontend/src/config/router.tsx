import React, { FC, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Welcome = lazy(() => import("~/pages/Welcome"));

const RouterConfig: FC = () => {
  return useRoutes([
    {
      path: "/welcome/:id",
      element: <Welcome />,
    },
    {
      path: "/start",
      element: <div>开始记账</div>,
    }
  ]);
};

export default RouterConfig;
