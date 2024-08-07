import glenLogo from "../assets/glenfalls-logo.png";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b lg:bg-n-1/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-1" : "bg-n-1/90 lg:backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block xl:mr-8" href="#hero">
          <img src={glenLogo} width={120} height={57} alt="Logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((i) => (
              <a
                href={i.url}
                key={i.id}
                onClick={handleClick}
                className={`block relative font-josefin text-2xl uppercase text-n-8 transition-colors hover:text-n-7 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold ${
                  i.url === pathname.hash ? "z-2 lg:text-n-7" : "lg:text-n-8"
                } lg:leading-5 lg:hover:text-n-7 xl:px-12`}
              >
                {i.title}
              </a>
            ))}
          </div>
        </nav>
        <Button className="hidden lg:flex" href="#contact">
          Contact
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
