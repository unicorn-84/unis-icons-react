import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsPowerappsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <mask
      id="ms-powerapps-icon_svg__a"
      width={36}
      height={36}
      x={6}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M6.557 22.517a2.253 2.253 0 0 0 0 2.966l13.34 15.247a1.502 1.502 0 0 0 2.261 0l1.437-1.642 1.582 1.725a1.5 1.5 0 0 0 2.214 0l14.017-15.29c.79-.862.79-2.184 0-3.045L27.39 7.186a1.502 1.502 0 0 0-2.214 0l-1.582 1.726-1.437-1.642a1.502 1.502 0 0 0-2.26 0L6.558 22.517Z"
      />
    </mask>
    <g mask="url(#ms-powerapps-icon_svg__a)">
      <path
        fill="url(#ms-powerapps-icon_svg__b)"
        d="M21.028 42.021 5.259 24 21.028 5.979 36.797 24 21.028 42.021Z"
      />
      <path
        fill="#000"
        fillOpacity={0.32}
        d="m26.284 6.73 16.52 18.02-16.52 18.022-7.33-7.996a1.502 1.502 0 0 1 0-2.03l6.4-6.98a1.502 1.502 0 0 0 0-2.03l-6.4-6.98a1.502 1.502 0 0 1 0-2.03l7.33-7.996Z"
      />
      <path
        fill="#000"
        fillOpacity={0.24}
        d="m26.284 6.121 16.52 18.021-16.52 18.022-7.33-7.996a1.502 1.502 0 0 1 0-2.03l6.4-6.98a1.502 1.502 0 0 0 0-2.03l-6.4-6.981a1.502 1.502 0 0 1 0-2.03l7.33-7.996Z"
      />
      <path
        fill="url(#ms-powerapps-icon_svg__c)"
        d="M26.284 5.979 42.804 24l-16.52 18.021-7.33-7.996a1.502 1.502 0 0 1 0-2.03l6.4-6.98a1.502 1.502 0 0 0 0-2.03l-6.4-6.98a1.502 1.502 0 0 1 0-2.03l7.33-7.996Z"
      />
      <path
        fill="url(#ms-powerapps-icon_svg__d)"
        d="M33.437 16.197a1.502 1.502 0 0 1 2.214 0L42.804 24l-7.153 7.803a1.5 1.5 0 0 1-2.214 0l-5.757-6.281a2.253 2.253 0 0 1 0-3.044l5.757-6.281Z"
      />
    </g>
    <defs>
      <linearGradient
        id="ms-powerapps-icon_svg__b"
        x1={32.667}
        x2={11.642}
        y1={42.021}
        y2={-9.414}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#742774" />
        <stop offset={1} stopColor="#BB35A4" />
      </linearGradient>
      <linearGradient
        id="ms-powerapps-icon_svg__c"
        x1={18.024}
        x2={35.295}
        y1={5.979}
        y2={42.021}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E48CC7" />
        <stop offset={1} stopColor="#D467B9" />
      </linearGradient>
      <linearGradient
        id="ms-powerapps-icon_svg__d"
        x1={29.288}
        x2={34.544}
        y1={16.867}
        y2={33.011}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9A1CB" />
        <stop offset={1} stopColor="#E48CC7" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsPowerappsIcon;
