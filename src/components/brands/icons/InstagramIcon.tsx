import * as React from 'react';
import { SVGProps } from 'react';

const SvgInstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#instagram-icon_svg__a)"
      d="M31.275 6h-14.55C10.81 6 6 10.811 6 16.725v14.55C6 37.19 10.811 42 16.725 42h14.55C37.19 42 42 37.189 42 31.275v-14.55C42 10.81 37.189 6 31.275 6Zm7.103 25.275a7.103 7.103 0 0 1-7.103 7.103h-14.55a7.103 7.103 0 0 1-7.103-7.103v-14.55a7.103 7.103 0 0 1 7.103-7.103h14.55a7.103 7.103 0 0 1 7.103 7.103v14.55Z"
    />
    <path
      fill="url(#instagram-icon_svg__b)"
      d="M24 14.69c-5.134 0-9.31 4.176-9.31 9.31s4.176 9.31 9.31 9.31 9.31-4.176 9.31-9.31-4.176-9.31-9.31-9.31Zm0 15a5.69 5.69 0 1 1 0-11.38 5.69 5.69 0 0 1 0 11.38Z"
    />
    <path
      fill="url(#instagram-icon_svg__c)"
      d="M33.329 16.99a2.231 2.231 0 1 0 0-4.462 2.231 2.231 0 0 0 0 4.462Z"
    />
    <defs>
      <linearGradient
        id="instagram-icon_svg__a"
        x1={24}
        x2={24}
        y1={41.895}
        y2={6.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E09B3D" />
        <stop offset={0.3} stopColor="#C74C4D" />
        <stop offset={0.6} stopColor="#C21975" />
        <stop offset={1} stopColor="#7024C4" />
      </linearGradient>
      <linearGradient
        id="instagram-icon_svg__b"
        x1={24}
        x2={24}
        y1={41.895}
        y2={6.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E09B3D" />
        <stop offset={0.3} stopColor="#C74C4D" />
        <stop offset={0.6} stopColor="#C21975" />
        <stop offset={1} stopColor="#7024C4" />
      </linearGradient>
      <linearGradient
        id="instagram-icon_svg__c"
        x1={33.329}
        x2={33.329}
        y1={41.895}
        y2={6.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E09B3D" />
        <stop offset={0.3} stopColor="#C74C4D" />
        <stop offset={0.6} stopColor="#C21975" />
        <stop offset={1} stopColor="#7024C4" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgInstagramIcon;
