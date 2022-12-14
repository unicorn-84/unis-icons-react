import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleCarplayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#apple-carplay-icon_svg__a)"
      d="M42 33.986A8.014 8.014 0 0 1 33.986 42H14.014A8.014 8.014 0 0 1 6 33.986V14.014A8.014 8.014 0 0 1 14.014 6h19.972A8.014 8.014 0 0 1 42 14.014v19.972Z"
    />
    <path
      fill="#fff"
      d="M24.024 35.117c-6.117 0-11.094-4.976-11.094-11.093S17.907 12.93 24.024 12.93c3.54 0 6.898 1.713 8.981 4.58a.62.62 0 0 1-1.002.73 9.892 9.892 0 0 0-7.98-4.07c-5.433 0-9.854 4.42-9.854 9.854 0 5.433 4.421 9.854 9.855 9.854a9.895 9.895 0 0 0 7.97-4.056.62.62 0 0 1 1 .73 11.136 11.136 0 0 1-8.97 4.566Zm-2.02-15.842c-.095-.07-.204-.132-.293-.132a.412.412 0 0 0-.412.412v8.79a.413.413 0 0 0 .629.348c.077-.048 7.523-4.294 7.595-4.357a.41.41 0 0 0 .035-.588c-.076-.082-7.429-4.381-7.553-4.473Z"
    />
    <defs>
      <linearGradient
        id="apple-carplay-icon_svg__a"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0BD319" />
        <stop offset={0.22} stopColor="#18D722" />
        <stop offset={1} stopColor="#86FC6F" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleCarplayIcon;
