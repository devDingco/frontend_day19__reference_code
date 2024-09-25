import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BoardsDetail from "./routes/boards/detail/BoardsDetail";
import BoardsNew from "./routes/boards/new/BoardsNew";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const 페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/boards/new", element: <BoardsNew /> },
  { path: "/boards/detail", element: <BoardsDetail /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container
);
root.render(<RouterProvider router={페이지목록} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
