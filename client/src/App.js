import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/authSlice";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/Private";
import ForgotPassoword from "./pages/Auth/ForgotPassoword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Order from "./pages/user/Order";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrder";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      dispatch(
        setCurrentUser({ user: parsedData.user, token: parsedData.token })
      );
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path={"/dashboard"} element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassoword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
