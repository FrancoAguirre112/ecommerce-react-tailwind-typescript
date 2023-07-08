import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Modal from "./Modal";
import Search from "./Search";
import { routes } from "../config/router/paths";
import menuHamburger from "../assets/icons/menuHamburger.svg";
import cart from "../assets/icons/cart.svg";
import menuArrowRight from "../assets/icons/menuArrowRight.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: routes.STORE, text: "Shop" },
    { to: routes.ABOUT, text: "About Us" },
  ];

  return (
    <>
      <header className="px-4 flex py-6  justify-between place-items-center border-b-[1px] md:px-24">
        <div className=" flex justify-start lg:hidden">
          <button onClick={handleClick}>
            <img src={menuHamburger} alt="open menu" />
          </button>
        </div>

        <Logo />

        <div className="hidden lg:flex justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex gap-8 text-lg font-semibold ${currentUrl.includes(link.to)  ? "underline" : ""}`}
            >
              <h1>{link.text}</h1>
              <div className="flex justify-end"></div>
            </Link>
          ))}
        </div>

        <div className="hidden justify-center lg:flex">
          <Search />
        </div>
        <div className="bg-gray-200 p-2 rounded-lg">
          <img src={cart} alt="cart" />
        </div>
      </header>

      <Modal open={isMenuOpen} onClose={handleClick} direction="left">
        <div className="flex flex-col gap-4">
          <Search />
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="grid grid-cols-[80%_20%] text-xl font-bold"
              onClick={handleClick}
            >
              <h1>{link.text}</h1>
              <div className="flex justify-end">
                <img src={menuArrowRight} alt={link.to} />
              </div>
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
}
