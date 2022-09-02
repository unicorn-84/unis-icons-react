import * as React from 'react';
import { SVGProps } from 'react';

const SvgBambooIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#2684FF"
      d="M38.577 26.463h-7.485a.98.98 0 0 0-.98.832 6.153 6.153 0 0 1-6.099 5.301l2.027 9.257A15.572 15.572 0 0 0 39.556 27.51a.979.979 0 0 0-.98-1.047Zm-12.953-.235 10.77-9.257a.979.979 0 0 0 0-1.469l-10.77-9.271a.979.979 0 0 0-1.61.744v18.509a.979.979 0 0 0 1.61.744Z"
    />
    <path
      fill="url(#bamboo-icon_svg__a)"
      d="M8.589 28.484A15.572 15.572 0 0 0 24.013 42v-9.404a6.148 6.148 0 0 1-6.148-6.133l-9.276 2.021Z"
    />
    <path
      fill="url(#bamboo-icon_svg__b)"
      d="M8.442 26.316v.147h9.423a6.148 6.148 0 0 1 6.149-6.134l-2.022-9.257a15.562 15.562 0 0 0-13.55 15.244Z"
    />
    <defs>
      <linearGradient
        id="bamboo-icon_svg__a"
        x1={16.303}
        x2={16.303}
        y1={11.19}
        y2={32.401}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="bamboo-icon_svg__b"
        x1={16.23}
        x2={16.23}
        y1={11.19}
        y2={32.401}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgBambooIcon;
