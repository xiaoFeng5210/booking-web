
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);
