import * as React from 'react';
import { SVGProps } from 'react';

const SvgMacosIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#fff"
      d="M42 24c0 9.936-8.055 18-18 18S6 33.936 6 24c0-9.945 8.055-18 18-18s18 8.055 18 18Z"
    />
    <path
      fill="url(#macos-icon_svg__a)"
      d="M31.071 11.143H33L25.286 24 33 36.857h-1.929L24 25.286l-7.071 11.571H15L22.714 24 15 11.143h1.929L24 22.714l7.071-11.571Z"
    />
    <defs>
      <linearGradient
        id="macos-icon_svg__a"
        x1={24}
        x2={24}
        y1={11.143}
        y2={36.857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AB1DC" />
        <stop offset={0.257} stopColor="#8396B0" />
        <stop offset={0.501} stopColor="#A37F86" />
        <stop offset={1} stopColor="#EE5031" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMacosIcon;
