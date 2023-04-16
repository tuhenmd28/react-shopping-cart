import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componennts/Layout";
import Home from "./componennts/pages/Home.jsx";
import Cart from "./componennts/pages/Cart.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="card" element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
