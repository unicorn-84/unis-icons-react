import * as React from 'react';
import { SVGProps } from 'react';

const SvgViteJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#vite-js-icon_svg__a)"
      d="M41.858 11.328 24.968 41.53a.918.918 0 0 1-1.598.007L6.145 11.33a.918.918 0 0 1 .96-1.358l16.907 3.022c.108.02.218.02.326 0l16.554-3.018a.918.918 0 0 1 .966 1.351Z"
    />
    <path
      fill="url(#vite-js-icon_svg__b)"
      d="M32.066 6.009 19.567 8.458a.459.459 0 0 0-.37.423l-.768 12.986a.459.459 0 0 0 .56.474l3.48-.803a.459.459 0 0 1 .554.539l-1.034 5.063c-.07.34.25.632.583.53l2.15-.652a.459.459 0 0 1 .582.532l-1.643 7.952c-.103.497.559.769.835.342l.184-.285 10.185-20.325a.459.459 0 0 0-.497-.656l-3.582.69a.459.459 0 0 1-.528-.577l2.338-8.105a.46.46 0 0 0-.53-.577Z"
    />
    <defs>
      <linearGradient
        id="vite-js-icon_svg__a"
        x1={5.725}
        x2={23.94}
        y1={12.41}
        y2={37.148}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset={1} stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="vite-js-icon_svg__b"
        x1={25.579}
        x2={29.326}
        y1={6.674}
        y2={32.379}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset={0.083} stopColor="#FFDD35" />
        <stop offset={1} stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgViteJsIcon;
