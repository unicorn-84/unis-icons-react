import * as React from 'react';
import { SVGProps } from 'react';

const SvgTwitterSpacesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#twitter-spaces-icon_svg__a)"
      d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
    />
    <path
      fill="#fff"
      d="M26.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-9.375 10.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm13.75 0a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25ZM24 34a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <defs>
      <linearGradient
        id="twitter-spaces-icon_svg__a"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8A61F2" />
        <stop offset={1} stopColor="#4B4BF3" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTwitterSpacesIcon;
