import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsSharepointIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle
      cx={23.5}
      cy={19.5}
      r={9.5}
      fill="url(#ms-sharepoint-icon_svg__a)"
    />
    <circle cx={32} cy={25} r={8} fill="url(#ms-sharepoint-icon_svg__b)" />
    <mask
      id="ms-sharepoint-icon_svg__c"
      width={13}
      height={24}
      x={18}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#C4C4C4" d="M31 31.5a6.5 6.5 0 1 1-13 0V14h13v17.5Z" />
    </mask>
    <g mask="url(#ms-sharepoint-icon_svg__c)">
      <circle
        cx={24.5}
        cy={31.5}
        r={6.5}
        fill="url(#ms-sharepoint-icon_svg__d)"
      />
      <path
        fill="#000"
        fillOpacity={0.3}
        d="M15 20a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H15V20Z"
      />
    </g>
    <rect
      width={18}
      height={18}
      x={8}
      y={15}
      fill="url(#ms-sharepoint-icon_svg__e)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M21 26.123c0-1.55-1.04-2.235-3.203-3.03-1.694-.63-2.097-.81-2.097-1.411 0-.517.503-.866 1.359-.866.872 0 1.694.293 2.616.796l.94-1.662c-.99-.615-2.164-.95-3.59-.95-2.18 0-3.74 1.117-3.74 2.821 0 1.746 1.241 2.305 3.32 3.045 1.661.587 1.98.88 1.98 1.397 0 .614-.587.921-1.51.921-1.09 0-2.046-.377-3.002-.991L13 27.785c1.174.81 2.633 1.215 4.126 1.215C19.373 29 21 27.939 21 26.123Z"
    />
    <defs>
      <linearGradient
        id="ms-sharepoint-icon_svg__a"
        x1={14}
        x2={34.583}
        y1={19.5}
        y2={19.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103A3B" />
        <stop offset={1} stopColor="#116B6E" />
      </linearGradient>
      <linearGradient
        id="ms-sharepoint-icon_svg__b"
        x1={26}
        x2={40}
        y1={21}
        y2={29}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D9097" />
        <stop offset={1} stopColor="#29BBC2" />
      </linearGradient>
      <linearGradient
        id="ms-sharepoint-icon_svg__d"
        x1={20}
        x2={31}
        y1={29.5}
        y2={34.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#28A6B5" />
        <stop offset={1} stopColor="#31D6EC" />
      </linearGradient>
      <linearGradient
        id="ms-sharepoint-icon_svg__e"
        x1={8}
        x2={27.5}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#105557" />
        <stop offset={1} stopColor="#116B6E" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsSharepointIcon;
