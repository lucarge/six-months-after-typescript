import React from "react";

type Props = {
  color?: string;
  height: string;
  width: string;
};

export const AndroidIcon = ({ color = "#3DDC84", height, width }: Props) => (
  <svg height={height} role="img" viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
    <title>Android icon</title>
    <path
      d="M24 19H0a13.6 13.6 0 0 1 2.21-6.07A11.2 11.2 0 0 1 5.87 9.4l.41-.23-2.02-3.41a.51.51 0 0 1 .17-.7.5.5 0 0 1 .69.18l2.08 3.5a12.62 12.62 0 0 1 4.84-.9 12.2 12.2 0 0 1 4.75.9l2.07-3.5a.5.5 0 0 1 .7-.17.51.51 0 0 1 .16.7L17.7 9.19l.5.28a11.38 11.38 0 0 1 3.63 3.62A14.48 14.48 0 0 1 24 19zm-7.5-4.48a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1zm-11 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1z"
      fill={color}
    />
  </svg>
);