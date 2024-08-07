import { dirArrow, playIcon } from "../assets";

const PlaceVid = ({ customClass, vidSrc, linkDir, vidText }) => {
  return (
    <div className={`relative ${customClass}`}>
      <video
        autoPlay
        playsInline={true}
        preload="auto"
        muted
        className="rounded-[40px]"
      >
        <source src={vidSrc} type="video/mp4" />
      </video>
      <div className="absolute flex items-center text-xs text-white bottom-[50px] left-[30px]">
        <img
          src={playIcon}
          width={12}
          height={12}
          alt="play"
          className="mr-1 mb-[2px]"
        />
        <p>{vidText}</p>
      </div>
      <div className="flex item-center">
        <img
          className="mt-1"
          src={dirArrow}
          width={15}
          height={15}
          alt="dir-icon"
        />
        <a
          className="mt-2 ml-2 text-cyan-800"
          href={linkDir}
          target="_blank"
          rel="golf club"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default PlaceVid;
