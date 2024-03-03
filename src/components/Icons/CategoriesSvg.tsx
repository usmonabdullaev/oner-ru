import React, { FC } from "react";

type Props = { state: string };

const CategoriesSvg: FC<Props> = ({ state }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16683 10.8327C3.70641 10.8327 3.3335 10.4598 3.3335 9.99935C3.3335 9.53893 3.70641 9.16602 4.16683 9.16602C4.62725 9.16602 5.00016 9.53893 5.00016 9.99935C5.00016 10.4598 4.62725 10.8327 4.16683 10.8327Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 10.8327C9.53991 10.8327 9.16699 10.4598 9.16699 9.99935C9.16699 9.53893 9.53991 9.16602 10.0003 9.16602C10.4607 9.16602 10.8337 9.53893 10.8337 9.99935C10.8337 10.4598 10.4607 10.8327 10.0003 10.8327Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8333 10.8327C15.3729 10.8327 15 10.4598 15 9.99935C15 9.53893 15.3729 9.16602 15.8333 9.16602C16.2937 9.16602 16.6667 9.53893 16.6667 9.99935C16.6667 10.4598 16.2937 10.8327 15.8333 10.8327Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16683 16.6667C3.70641 16.6667 3.3335 16.2937 3.3335 15.8333C3.3335 15.3729 3.70641 15 4.16683 15C4.62725 15 5.00016 15.3729 5.00016 15.8333C5.00016 16.2937 4.62725 16.6667 4.16683 16.6667Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 16.6667C9.53991 16.6667 9.16699 16.2937 9.16699 15.8333C9.16699 15.3729 9.53991 15 10.0003 15C10.4607 15 10.8337 15.3729 10.8337 15.8333C10.8337 16.2937 10.4607 16.6667 10.0003 16.6667Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8333 16.6667C15.3729 16.6667 15 16.2937 15 15.8333C15 15.3729 15.3729 15 15.8333 15C16.2937 15 16.6667 15.3729 16.6667 15.8333C16.6667 16.2937 16.2937 16.6667 15.8333 16.6667Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16683 4.99967C3.70641 4.99967 3.3335 4.62676 3.3335 4.16634C3.3335 3.70592 3.70641 3.33301 4.16683 3.33301C4.62725 3.33301 5.00016 3.70592 5.00016 4.16634C5.00016 4.62676 4.62725 4.99967 4.16683 4.99967Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 4.99967C9.53991 4.99967 9.16699 4.62676 9.16699 4.16634C9.16699 3.70592 9.53991 3.33301 10.0003 3.33301C10.4607 3.33301 10.8337 3.70592 10.8337 4.16634C10.8337 4.62676 10.4607 4.99967 10.0003 4.99967Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8333 4.99967C15.3729 4.99967 15 4.62676 15 4.16634C15 3.70592 15.3729 3.33301 15.8333 3.33301C16.2937 3.33301 16.6667 3.70592 16.6667 4.16634C16.6667 4.62676 16.2937 4.99967 15.8333 4.99967Z"
        fill={state}
        stroke={state}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CategoriesSvg;
