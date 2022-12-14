import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsExcelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width={24} height={28} x={16} y={10} fill="#2FB776" rx={2} />
    <path
      fill="url(#ms-excel-icon_svg__a)"
      d="M16 31h24v5a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-5Z"
    />
    <path fill="#229C5B" d="M28 24h12v7H28z" />
    <path fill="#27AE68" d="M28 17h12v7H28z" />
    <path fill="#1D854F" d="M16 12a2 2 0 0 1 2-2h10v7H16v-5Z" />
    <path fill="#197B43" d="M16 17h12v7H16z" />
    <path fill="#1B5B38" d="M16 24h12v7H16z" />
    <path
      fill="#000"
      fillOpacity={0.3}
      d="M16 20a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9V20Z"
    />
    <rect
      width={18}
      height={18}
      x={8}
      y={15}
      fill="url(#ms-excel-icon_svg__b)"
      rx={2}
    />
    <path
      fill="#fff"
      d="m21 29-2.818-5.1 2.694-4.9h-2.199l-1.663 3.129L15.378 19H13.11l2.708 4.9L13 29h2.2l1.773-3.314L18.732 29H21Z"
    />
    <defs>
      <linearGradient
        id="ms-excel-icon_svg__a"
        x1={16}
        x2={40}
        y1={34.5}
        y2={34.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#163C27" />
        <stop offset={1} stopColor="#2A6043" />
      </linearGradient>
      <linearGradient
        id="ms-excel-icon_svg__b"
        x1={8}
        x2={26}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A30" />
        <stop offset={1} stopColor="#176F3D" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsExcelIcon;
