import * as React from 'react';
import { SVGProps } from 'react';

const SvgConfluenceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#confluence-icon_svg__a)"
      d="M9.16 32.099c-.33.54-.702 1.166-1.018 1.665a1.018 1.018 0 0 0 .341 1.385l6.62 4.073a1.018 1.018 0 0 0 1.41-.346c.264-.443.606-1.018.977-1.634 2.623-4.328 5.26-3.799 10.016-1.528l6.563 3.121a1.018 1.018 0 0 0 1.37-.509l3.151-7.128a1.018 1.018 0 0 0-.51-1.334 799.79 799.79 0 0 1-6.618-3.147C22.542 22.384 14.96 22.664 9.16 32.1Z"
    />
    <path
      fill="url(#confluence-icon_svg__b)"
      d="M38.84 15.923c.33-.54.702-1.166 1.018-1.665a1.018 1.018 0 0 0-.341-1.385L32.897 8.8a1.018 1.018 0 0 0-1.45.336c-.265.443-.607 1.018-.978 1.634-2.622 4.328-5.26 3.799-10.015 1.528L13.91 9.192a1.018 1.018 0 0 0-1.37.509l-3.15 7.128c-.222.51.004 1.103.51 1.334 1.385.652 4.14 1.95 6.619 3.147 8.94 4.328 16.522 4.038 22.322-5.387Z"
    />
    <defs>
      <linearGradient
        id="confluence-icon_svg__a"
        x1={49.908}
        x2={42.496}
        y1={36.314}
        y2={19.309}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="confluence-icon_svg__b"
        x1={2521.57}
        x2={2435.27}
        y1={-24914.5}
        y2={-25309.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgConfluenceIcon;
