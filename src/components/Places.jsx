import Button from "./Button";
import PlaceVid from "./PlaceVid";
import { golfVid, gregVid, rambodaVid } from "../assets";

const Places = () => {
  return (
    <section id="places" className="bg-neutral-100 mt-[100px] mb-[50px]">
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center mx-20 py-20">
        <div className="lg:w-[25%] lg:text-left w-full text-center lg:mr-10 mr-0">
          <h1 className="uppercase font-bold text-3xl">
            Find the <span className="text-color-3">perfect place</span> to
            visit
          </h1>
          <p className="mt-5 text-lg">
            While you are here don&apos;t miss out on these beautiful spots in
            Nuwara Eliya, some of which are within walking distance of our
            apartment
          </p>
          <Button
            href="https://traveltriangle.com/blog/places-to-visit-in-nuwara-eliya/"
            className="mt-5 shadow-xl"
            newTab={true}
          >
            View More
          </Button>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row lg:mt-0 mt-10">
          <PlaceVid
            vidSrc={golfVid}
            customClass="mb-10 md:mb-0 lg:mb-0"
            linkDir={"https://maps.app.goo.gl/5Fqf3cQNzSEtEEsEA"}
            vidText="Golf Club"
          />
          <PlaceVid
            vidSrc={gregVid}
            customClass="lg:ml-10 md:ml-10 ml-0 mb-10 md:mb-0 lg:mb-0"
            linkDir={"https://maps.app.goo.gl/2xdsUU655MrPJfEMA"}
            vidText="Gregory Lake"
          />
          <PlaceVid
            vidSrc={rambodaVid}
            customClass="lg:ml-10 md:ml-10 ml-0"
            linkDir={"https://maps.app.goo.gl/T6ev2wAkqapL3Qmu7"}
            vidText="Ramboda Falls"
          />
        </div>
      </div>
    </section>
  );
};

export default Places;
