import * as React from 'react';
import { SVGProps } from 'react';

const SvgOpsgenieIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#opsgenie-icon_svg__a)"
      d="M24 23.966A8.983 8.983 0 1 0 24 6a8.983 8.983 0 0 0 0 17.966Z"
    />
    <path
      fill="url(#opsgenie-icon_svg__b)"
      d="M23.234 41.78A43.334 43.334 0 0 1 9.01 26.912a1.007 1.007 0 0 1 .438-1.394l6.803-3.339a1.007 1.007 0 0 1 1.314.403A33.63 33.63 0 0 0 32.167 35.8a43.556 43.556 0 0 1-7.402 5.982 1.445 1.445 0 0 1-1.53 0Z"
    />
    <path
      fill="#2684FF"
      d="M24.765 41.78a43.305 43.305 0 0 0 14.224-14.869 1.007 1.007 0 0 0-.433-1.394l-6.807-3.339a1.007 1.007 0 0 0-1.314.403A33.615 33.615 0 0 1 15.832 35.8a43.306 43.306 0 0 0 7.402 5.982 1.445 1.445 0 0 0 1.53 0Z"
    />
    <defs>
      <linearGradient
        id="opsgenie-icon_svg__a"
        x1={23.999}
        x2={23.999}
        y1={8.986}
        y2={27.43}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2684FF" />
        <stop offset={0.82} stopColor="#0052CC" />
      </linearGradient>
      <linearGradient
        id="opsgenie-icon_svg__b"
        x1={18.471}
        x2={23.302}
        y1={28.285}
        y2={38.396}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2684FF" />
        <stop offset={0.62} stopColor="#0052CC" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgOpsgenieIcon;
