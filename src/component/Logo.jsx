const Logo = () => {
  return (
    <div className="w-fit bg-[#110e2b] absolute p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="36 26 382 68"
        className="block h-12 w-auto"
      >
        <defs>
          <linearGradient
            id="brandGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff4b6e" />
            <stop offset="100%" stopColor="#ff7b54" />
          </linearGradient>

          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>

        <g transform="translate(35, 25)">
          <path
            d="M 28 12 L 10 35 L 28 58"
            stroke="url(#whiteGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 52 12 L 70 35 L 52 58"
            stroke="url(#brandGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="48"
            y1="8"
            x2="32"
            y2="62"
            stroke="url(#brandGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="48" cy="8" r="4.5" fill="url(#brandGradient)" />
          <circle cx="32" cy="62" r="4.5" fill="url(#brandGradient)" />
        </g>

        <text
          x="135"
          y="76"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="-1.5"
        >
          <tspan fill="#ffffff">dev</tspan>
          <tspan fill="url(#brandGradient)">Tinder</tspan>
        </text>

        <circle cx="395" cy="35" r="2.5" fill="#ff4b6e" opacity="0.7" />
        <circle cx="410" cy="50" r="4" fill="#ff7b54" opacity="0.9" />
        <circle cx="390" cy="85" r="2" fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
};

export default Logo;
