import { glenLogoWhite } from "../assets";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const facilities = gsap.utils.toArray(scrollRef.current.children);

    facilities.forEach((item) => {
      gsap.from(item, {
        y: 10 * (facilities.indexOf(item) + 5),
        opacity: 0,
        ease: "power1",
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "bottom, bottom",
          end: "top 20%",
        },
      });
    });
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row lg:items-start items-center justify-center bg-[#2c0000] text-white px-20 py-10"
      ref={scrollRef}
    >
      <div className="flex justify-center lg:justify-start w-full lg:w-[50%] mb-10 lg:mb-0">
        <img src={glenLogoWhite} alt="footer logo" width={150} height={150} />
      </div>
      <div className="flex justify-center lg:justify-between w-full lg:w-[50%]">
        <div className="mx-2">
          <p>Glen Falls Apartment,</p>
          <p>No. 33, Glen Fall Road,</p>
        </div>
        <div className="mx-2">
          <p>+94 777 48 77 20</p>
          <p>+94 765 807 720</p>
          <p>hameezm@yahoo.com</p>
        </div>
        <div className="flex flex-col mx-2">
          <a
            className="hover:text-color-3 h-[21px] mb-2 w-fit transition-all border-b-[0.5px] border-white hover:border-color-3"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-color-3 h-[21px] mb-2 w-fit transition-all border-b-[0.5px] border-white hover:border-color-3"
            href="#facilities"
          >
            Facilities
          </a>
          <a
            className="hover:text-color-3 h-[21px] mb-2 w-fit transition-all border-b-[0.55px] border-white hover:border-color-3"
            href="#places"
          >
            Places
          </a>
          <a
            className="hover:text-color-3 h-[21px] mb-2 w-fit transition-all border-b-[0.5px] border-white hover:border-color-3"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="hover:text-color-3 h-[21px] w-fit transition-all border-b-[0.5px] border-white hover:border-color-3"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
