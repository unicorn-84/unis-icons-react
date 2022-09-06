import * as React from 'react';
import { SVGProps } from 'react';

const SvgTechCrunchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={20} cy={23} r={14} fill="url(#tech-crunch-icon_svg__a)" />
    <path
      fill="#fff"
      d="M28 23.5V28h-4.5v10.5H19V28h-4.5v-4.5H28Zm4.5 4.5v6h9v4.5H28V28h4.5Zm0 0v-4.5h9V28h-9Z"
    />
    <defs>
      <linearGradient
        id="tech-crunch-icon_svg__a"
        x1={14}
        x2={28.5}
        y1={12}
        y2={33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#13B069" />
        <stop offset={1} stopColor="#12C833" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTechCrunchIcon;
