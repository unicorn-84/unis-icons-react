import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleMessagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#apple-messages-icon_svg__a)"
      d="M6 18.343c0-4.32 0-6.48.84-8.13a7.714 7.714 0 0 1 3.372-3.372C11.862 6 14.022 6 18.342 6h11.315c4.32 0 6.48 0 8.13.84a7.714 7.714 0 0 1 3.372 3.372c.841 1.65.841 3.81.841 8.13v11.315c0 4.32 0 6.48-.84 8.13a7.714 7.714 0 0 1-3.372 3.372c-1.65.841-3.81.841-8.13.841H18.342c-4.32 0-6.48 0-8.13-.84a7.714 7.714 0 0 1-3.372-3.372C6 36.138 6 33.978 6 29.658V18.342Z"
    />
    <path
      fill="#fff"
      d="M24 33c6.39 0 11.571-4.317 11.571-9.643 0-5.325-5.18-9.643-11.571-9.643-6.39 0-11.572 4.318-11.572 9.643 0 3.376 2.082 6.346 5.234 8.069-.106.857-.423 2.002-1.376 2.86 1.802-.325 3.241-.977 4.316-1.709A13.72 13.72 0 0 0 24 33Z"
    />
    <defs>
      <linearGradient
        id="apple-messages-icon_svg__a"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AF575" />
        <stop offset={1} stopColor="#13BD2C" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleMessagesIcon;
