/* eslint-disable react/prop-types */
const FaciCard = ({ icon, title, cardColor, customClass, description }) => {
  return (
    <div
      className={`${cardColor} ${customClass} text-center w-[200px] h-[140px] rounded-xl flex flex-col items-center relative p-3 mb-15 shadow-3xl hover:shadow-none transition-shadow`}
    >
      <div className="bg-black rounded-full p-3 absolute top-[-30px] shadow-4xl">
        <img src={icon} alt="room icon" width={30} height={30} />
      </div>
      <h2 className="text-white mt-7 mb-2 uppercase font-bold">{title}</h2>
      <p className="text-white text-xs">{description}</p>
    </div>
  );
};

export default FaciCard;
