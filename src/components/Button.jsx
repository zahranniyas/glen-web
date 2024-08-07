import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  newTab,
  type,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-3 ${
    px || "px-7"
  } ${white ? "text-n-1" : "text-n-5"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button type={type} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={classes}
      rel="link"
      target={newTab ? "_blank" : ""}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
