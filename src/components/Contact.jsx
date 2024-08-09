import { DateRange } from "react-date-range";
import { useState, useRef } from "react";
import { format } from "date-fns";
import Button from "./Button";
import { addressIcon, emailIcon, phoneIcon } from "../assets";
import Swal from "sweetalert2";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // GSAP
  const scrollRef = useRef();

  useGSAP(() => {
    const places = gsap.utils.toArray(scrollRef.current.children);

    places.forEach((item) => {
      gsap.from(item, {
        y: 10 * (places.indexOf(item) + 5),
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

  //  Calender logic
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

  return (
    <section
      ref={scrollRef}
      id="contact"
      className=" bg-[#fffbfc] flex flex-col text-center lg:text-left lg:flex-row items-center justify-center py-[100px]"
    >
      <div className="mx-[100px] max-sm:mx-[10px] mb-[40px] lg:mb-0">
        <h1 className="text-5xl uppercase font-bold mb-2 text-color-3">
          Contact
        </h1>
        <p className="mb-8">
          Email, call or complete the form to get in <br /> touch with us
        </p>
        <p className="mb-8 flex items-center">
          <img
            src={addressIcon}
            width={20}
            height={20}
            alt="address-icon"
            className="inline mr-2"
          />
          33, Glen Fall Road, Nuwara Eliya
        </p>
        <p className="mb-8">
          <img
            src={emailIcon}
            width={20}
            height={20}
            alt="email-icon"
            className="inline mr-2"
          />
          hameezm@yahoo.com
        </p>
        <p className="mb-2">
          {" "}
          <img
            src={phoneIcon}
            width={20}
            height={20}
            alt="phone-icon"
            className="inline mr-2"
          />
          +94 777 487 720
        </p>
        <p>
          {" "}
          <img
            src={phoneIcon}
            width={20}
            height={20}
            alt="phone2-icon"
            className="inline mr-2"
          />
          +94 765 807 720
        </p>
      </div>
      <div className="mx-[100px] max-sm:mx-[10px]">
        <div className="bg-white p-8 w-[500px] max-sm:w-full rounded-3xl shadow-xl">
          <form onSubmit={onSubmit} action="#">
            <input
              className=" input-field w-full"
              name="dates"
              onClick={handleClick}
              onChange={handleChange}
              type="text"
              value={`${format(date.startDate, "MMM/dd/yy")} to ${format(
                date.endDate,
                "MMM/dd/yyyy"
              )}`}
            />
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
            <input
              type="number"
              name="adults"
              placeholder="No. of Adults"
              className="input-field inline-block mr-2 my-0"
            />
            <input
              type="number"
              name="children"
              placeholder="No. of Children"
              className="input-field inline-block my-0"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-field w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              className="input-field w-full"
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              className="input-field w-full"
              required
            ></textarea>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
