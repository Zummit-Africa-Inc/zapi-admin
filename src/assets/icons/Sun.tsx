import React from "react";

interface Props {
  fill?: string;
  onClick?: () => void;
}

const Sun: React.FC<Props> = ({ fill, onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: "pointer" }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_436_8033)">
        <path
          d="M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
          fill={fill}
        />
        <path
          d="M12 1V3"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21V23"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7793 4.21973L18.3593 5.63973"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.64062 18.3604L4.22062 19.7804"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 12H21"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12H1"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7793 19.7804L18.3593 18.3604"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.64062 5.63973L4.22062 4.21973"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_436_8033">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sun;
