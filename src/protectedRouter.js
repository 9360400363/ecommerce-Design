import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { Counter } from "./pages/counter";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Product from "./pages/product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "counter",
        element: <Counter />,
      },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> },
      { path: "productDetail/:id", element: <Product /> },
    ],
  },
]);

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Login /> },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const Routing = () => {
  const { token, userDetails } = useSelector((state) => state.auth);
  if (!token) {
    return authRouter;
  } else {
    return mainRouter;
  }
};

export default Routing;
