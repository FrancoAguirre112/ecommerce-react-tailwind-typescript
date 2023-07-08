import { Routes, Route } from "react-router-dom";
import { routes } from "./config/router/paths";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Detail from "./pages/Detail";

//max-w-sm mx-auto md:max-w-screen-lg

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={routes.ABOUT} element={<About />} />
          <Route path="/store/:category?/:search?" element={<Store />} />
          <Route path={routes.DETAIL} element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
