import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SubHeader from "./components/SubHeader/SubHeader";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />
            <SubHeader />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
