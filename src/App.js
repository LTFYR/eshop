import "./App.css";
import { Navbar, Footer, Sidebar } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import {
  About,
  Home,
  Cart,
  Checkout,
  Error,
  ProductDetail,
  PrivateRouter,
  ProductsPage,
} from "./pages";
import Profile from "./components/auth/Profile";
import "./assets/sass/components/Navbar.scss";
import { useUserContext } from "./context/userContext";
import Contact from "./pages/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { isAuthenticated } = useUserContext();
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {isAuthenticated && <Route path="/checkout" element={<Checkout />} />}
        <Route path="products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
