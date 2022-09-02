import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsPowerpointIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle
      cx={25.548}
      cy={24}
      r={14.452}
      fill="url(#ms-powerpoint-icon_svg__a)"
    />
    <mask
      id="ms-powerpoint-icon_svg__b"
      width={29}
      height={30}
      x={11}
      y={9}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <circle cx={25.548} cy={24} r={14.452} fill="#C4C4C4" />
    </mask>
    <g mask="url(#ms-powerpoint-icon_svg__b)">
      <path
        fill="url(#ms-powerpoint-icon_svg__c)"
        d="M26.581 7.484h17.548v17.548H26.581z"
      />
      <path
        fill="#000"
        fillOpacity={0.3}
        d="M14.193 19.774a3 3 0 0 1 3-3h8.452a3 3 0 0 1 3 3v12.58a3 3 0 0 1-3 3H14.193v-15.58Z"
      />
      <path fill="#EB6C4D" d="M9.032 7.484H26.58v17.548H9.032z" />
    </g>
    <rect
      width={18.581}
      height={18.581}
      x={8}
      y={14.71}
      fill="url(#ms-powerpoint-icon_svg__d)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M21.42 22.407c0-2.226-1.467-3.568-3.791-3.568h-3.435V29.16h2.132v-3.14h1.214c2.177 0 3.88-1.24 3.88-3.614Zm-2.162.045c0 1.002-.637 1.651-1.674 1.651h-1.258V20.77h1.244c1.036 0 1.688.546 1.688 1.682Z"
    />
    <defs>
      <linearGradient
        id="ms-powerpoint-icon_svg__a"
        x1={11.097}
        x2={40}
        y1={25.993}
        y2={25.993}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A73A24" />
        <stop offset={1} stopColor="#F75936" />
      </linearGradient>
      <linearGradient
        id="ms-powerpoint-icon_svg__c"
        x1={40.516}
        x2={26.581}
        y1={17.806}
        y2={17.806}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB8A3" />
        <stop offset={1} stopColor="#F1876D" />
      </linearGradient>
      <linearGradient
        id="ms-powerpoint-icon_svg__d"
        x1={8}
        x2={26.581}
        y1={25.282}
        y2={25.282}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A73A24" />
        <stop offset={1} stopColor="#F75936" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsPowerpointIcon;
