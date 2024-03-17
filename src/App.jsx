import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
