import * as React from 'react';
import { SVGProps } from 'react';

const SvgSourcetreeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2684FF"
      d="M39.857 19.86c0-8.76-7.1-15.86-15.86-15.86a15.854 15.854 0 0 0-4.901 30.938v7.947c0 .616.5 1.115 1.115 1.115h7.529c.615 0 1.115-.5 1.115-1.115v-7.941A15.865 15.865 0 0 0 39.857 19.86Zm-15.86 5.359a5.362 5.362 0 1 1 0-10.724 5.362 5.362 0 0 1 0 10.724Z"
    />
    <path
      fill="url(#sourcetree-icon_svg__a)"
      d="M23.998 4v10.5a5.362 5.362 0 0 1 0 10.724 4.902 4.902 0 0 1 4.901 4.902v4.823A15.86 15.86 0 0 0 23.998 4Z"
    />
    <defs>
      <linearGradient
        id="sourcetree-icon_svg__a"
        x1={31.927}
        x2={31.927}
        y1={32.078}
        y2={15.231}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgSourcetreeIcon;
