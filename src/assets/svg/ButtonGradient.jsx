const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#BE1E2D" />
          <stop offset="100%" stopColor="#D13D95" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D33C4E" />
          <stop offset="100%" stopColor="#D13D95" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#CA3ECE" />
          <stop offset="100%" stopColor="#BE1E2D" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#CA3ECE" />
          <stop offset="100%" stopColor="#D33C4E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
