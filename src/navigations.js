import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Dashboard from "./base/Dashboard";

const navigations = [
  { path: "/", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default navigations;
