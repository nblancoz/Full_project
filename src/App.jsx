import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SubHeader from "./components/SubHeader/SubHeader";
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext/ProductState";

function App() {
  return (
    <div>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <SubHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
