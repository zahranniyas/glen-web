import FaciCard from "./FaciCard";
import { rooms, bath, wifi, parking, other } from "../assets";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
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
    <section ref={scrollRef} id="facilities" className="sm:mt-5 font-josefin">
      <h1 className="text-5xl max-sm:text-4xl uppercase font-bold text-center">
        Our <span className="text-color-3">Facilities</span>
      </h1>
      <p className="text-center max-sm:text-xs text-xl mt-2">
        We offer you the best facilities for the most reasonable prices
        <br /> in Nuwara Eliya
      </p>
      <div className="flex mt-20 justify-center flex-wrap">
        <FaciCard
          icon={rooms}
          cardColor="bg-[#be1e2d]"
          title="Rooms"
          customClass="mx-5"
          description="3 Double-Bed Rooms with Comfortable and Clean Beds and Linens"
        />
        <FaciCard
          icon={bath}
          cardColor="bg-[#be1e2d]"
          title="Bath"
          customClass="mx-5"
          description="One Common and One Attached Bathrooms with heater facilities"
        />
        <FaciCard
          icon={wifi}
          cardColor="bg-[#be1e2d]"
          title="WIFI & TV"
          customClass="mx-5"
          description="Free WiFi and Dialog TV Connection available throughout your stay"
        />
      </div>
      <div className="flex justify-center flex-wrap">
        <FaciCard
          icon={parking}
          cardColor="bg-[#be1e2d]"
          title="Parking"
          customClass="mx-5"
          description="Spacious parking facilities are available for any type of vehicle"
        />
        <FaciCard
          icon={other}
          cardColor="bg-[#be1e2d]"
          title="OTHER"
          customClass="mx-5"
          description="Pantry with a refrigerator and microwave"
        />
      </div>
    </section>
  );
};

export default Facilities;
