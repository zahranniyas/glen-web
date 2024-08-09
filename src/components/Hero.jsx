import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState, useRef } from "react";
import { format } from "date-fns";
import Button from "./Button";
import { hero01, hero02, hero03 } from "../assets";
import Swal from "sweetalert2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { blueBg, redBg } from "../assets";

// CONTACT FORM

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "8646b892-8163-4d4d-bf9c-bb93780c051d");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Submitted!",
      text: "Your message has been sent. We will get in touch with you soon",
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "#be1e2d",
    });
  }
};

const Hero = () => {
  // GSAP Animation
  useGSAP(() => {
    gsap.from("#imgOne", {
      opacity: 0,
      y: 10,
      ease: "power1",
      duration: 1,
    });
    gsap.from("#imgTwo", {
      opacity: 0,
      y: 10,
      ease: "power1",
      duration: 1,
      delay: 0.2,
    });
    gsap.from("#imgThree", {
      opacity: 0,
      y: 10,
      ease: "power1",
      duration: 1,
      delay: 0.4,
    });
    gsap.from("#heroText1", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power1",
    });
    gsap.from("#heroText2", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power1",
      delay: 0.2,
    });
    gsap.from("#heroText3", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power1",
      delay: 0.4,
    });
    gsap.from(".book-main", {
      opacity: 0,
      y: 10,
      duration: 1,
      delay: 0.5,
      ease: "power1",
    });
  });

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleClick = () => setOpenDate((prev) => !prev);

  const menuWhat = useRef(null);
  const closeDateAny = (e) => {
    if (openDate && !menuWhat.current?.contains(e.target)) {
      setOpenDate(false);
    }
  };

  document.addEventListener("mousedown", closeDateAny);

  return (
    <section
      id="home"
      className="w-[95%] m-auto mt-3 lg:mt-0 h-[calc(100vh-89px)] lg:h-[calc(100vh-84px)] max-sm:h-[calc(100vh-84px)] relative"
    >
      <div className="flex h-full max-sm:h-auto max-sm:justify-start max-sm:pt-10 items-center justify-center flex-col">
        <div className="flex max-sm:flex-col max-sm:text-center">
          <div className="flex max-sm:mb-5 max-sm:w-[100%] w-[50%] flex-col font-josefin justify-center uppercase">
            <p id="heroText1" className="max-sm:text-xs">
              The perfect place to
            </p>
            <div
              id="heroText2"
              className="text-color-3 text-6xl max-sm:text-5xl lg:text-8xl font-bold mt-5 max-sm:mt-2 relative"
            >
              <p>unwind</p>
              <p>yourself</p>
              {/* <img
                src={redBg}
                alt="red circle"
                className="absolute bottom-[-100px] right-[220px]"
              />
              <img
                src={blueBg}
                alt="red circle"
                className="absolute top-[-80px] right-[-20px]"
              /> */}
            </div>
            <p id="heroText3" className="max-sm:text-xs">
              In the midst of the beautiful landscape <br /> of nuwara eliya,
              the little england
            </p>
          </div>
          <div className="flex items-center w-[50%] max-sm:w-[90%] max-sm:m-auto">
            <div className="flex flex-col mr-5 w-[50%] items-end">
              <img id="imgOne" src={hero01} alt="hero01" className="mb-5" />
              <img id="imgTwo" src={hero02} alt="hero02" className="" />
            </div>
            <div className="w-[50%]">
              <img
                id="imgThree"
                src={hero03}
                alt="hero03"
                className="top-[70px] relative"
              />
            </div>
          </div>
        </div>
        <Button
          className="book-main shadow-xl z-49 relative bottom-[-60px] sm:hidden"
          href="#contact"
        >
          Booking
        </Button>
        <div className="bottom-15 max-md:bottom-[-50px] max-sm:hidden relative">
          <div
            id="bookMain"
            className="book-main overflow-hidden font-josefin text-sm shadow-xl bg-white m-auto z-49 relative rounded-3xl"
          >
            <form
              onSubmit={onSubmit}
              className="bg-transparent flex justify-center items-center py-2"
            >
              <input
                className="bg-transparent pl-4 w-[200px] max-md:w-[100px] max-md:text-xs max-sm:w-[65px] max-sm:text-[8px]"
                name="dates"
                onClick={handleClick}
                onChange={handleChange}
                type="text"
                value={`${format(date.startDate, "MMM/dd/yy")} to ${format(
                  date.endDate,
                  "MMM/dd/yyyy"
                )}`}
              />
              <input
                name="adults"
                type="number"
                className="bg-transparent py-4 placeholder-black border-n-2 border-l-2 pl-4 w-[150px] max-md:w-[100px] max-md:text-xs max-sm:w-[65px] max-sm:text-[8px]"
                placeholder="No. of adults"
              />
              <input
                name="children"
                type="number"
                className="bg-transparent py-4 placeholder-black border-n-2 border-l-2 pl-4 w-[150px] max-md:w-[100px] max-md:text-xs max-sm:w-[65px] max-sm:text-[8px]"
                placeholder="No. of children"
              />
              <input
                name="email"
                type="email"
                className="bg-transparent py-4 placeholder-black border-n-2 border-l-2 border-r-2 pl-4 w-[150px] max-md:w-[100px] max-md:text-xs max-sm:w-[65px] max-sm:text-[8px]"
                placeholder="E-mail"
              />
              <button
                type="submit"
                className="w-[150px] max-md:w-[100px] max-md:text-[10px] mx-3 text-white py-3 bg-color-3 rounded-lg font-bold uppercase max-sm:w-[65px] max-sm:text-[8px]"
              >
                Send Inquiry
              </button>
            </form>
            {openDate ? (
              <div ref={menuWhat} className="absolute">
                <DateRange
                  ranges={[date]}
                  onChange={handleChange}
                  minDate={new Date()}
                  rangeColors={["#f33e5b"]}
                  calendarWidth
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
