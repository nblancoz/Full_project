import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SubHeader from "./components/SubHeader/SubHeader";
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

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
              <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
