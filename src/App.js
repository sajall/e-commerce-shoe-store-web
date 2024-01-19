import "./App.css";
import { Centerbody } from "./components/Centerbody/Centerbody";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/Signup/Signup";
import { PendingOrders } from "./components/PendingOrders/PendingOrders";
import { CompletedOrders } from "./components/CompletedOrders/CompletedOrders";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>


        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Centerbody />} />
        <Route path={`/product-details/:id`} element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/completed-orders" element={<CompletedOrders />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
