import { Routes, Route } from "react-router-dom";
import { routes } from "./config/router/paths";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

//max-w-sm mx-auto md:max-w-screen-lg

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={routes.ABOUT} element={<About />} />
          <Route path="/store/:category?/:search?" element={<Store />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
