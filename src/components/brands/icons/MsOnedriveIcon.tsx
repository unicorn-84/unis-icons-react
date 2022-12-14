import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsOnedriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <mask
      id="ms-onedrive-icon_svg__a"
      width={40}
      height={25}
      x={4}
      y={11}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#C4C4C4"
        d="M13.787 36C8.382 36 4 31.71 4 26.417c0-5.177 4.192-9.395 9.433-9.578C15.594 13.34 19.518 11 24 11c5.788 0 10.646 3.902 11.979 9.167C40.415 20.2 44 23.732 44 28.083c0 4.233-3.75 7.917-7.66 7.906L13.787 36Z"
      />
    </mask>
    <g mask="url(#ms-onedrive-icon_svg__a)">
      <path
        fill="url(#ms-onedrive-icon_svg__b)"
        d="M13.787 36a9.85 9.85 0 0 1-7.595-3.539l20.361-8.544 15.833 8.914C40.99 34.65 38.883 36 36.5 35.989 32.906 36 19.078 36 13.787 36Z"
      />
      <path
        fill="url(#ms-onedrive-icon_svg__c)"
        d="m35.973 20.143-9.42 3.774 15.833 8.914A7.774 7.774 0 0 0 44 28.083c0-4.351-3.585-7.883-8.021-7.916a2.002 2.002 0 0 0-.006-.024Z"
      />
      <path
        fill="url(#ms-onedrive-icon_svg__d)"
        d="m12.83 16.878 13.723 7.039 9.42-3.774C34.632 14.892 29.78 11 24 11c-4.482 0-8.406 2.34-10.567 5.84-.203.007-.403.02-.602.038Z"
      />
      <path
        fill="url(#ms-onedrive-icon_svg__e)"
        d="m6.192 32.461 20.361-8.544-13.722-7.039C7.874 17.35 4 21.44 4 26.417c0 2.291.822 4.395 2.192 6.044Z"
      />
    </g>
    <defs>
      <linearGradient
        id="ms-onedrive-icon_svg__b"
        x1={9.532}
        x2={38.038}
        y1={34.333}
        y2={32.595}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2086B8" />
        <stop offset={1} stopColor="#46D3F6" />
      </linearGradient>
      <linearGradient
        id="ms-onedrive-icon_svg__c"
        x1={33.787}
        x2={41.763}
        y1={28.083}
        y2={22.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1694DB" />
        <stop offset={1} stopColor="#62C3FE" />
      </linearGradient>
      <linearGradient
        id="ms-onedrive-icon_svg__d"
        x1={14.638}
        x2={33.167}
        y1={12.667}
        y2={23.419}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D3D78" />
        <stop offset={1} stopColor="#063B83" />
      </linearGradient>
      <linearGradient
        id="ms-onedrive-icon_svg__e"
        x1={3.574}
        x2={22.204}
        y1={28.5}
        y2={21.581}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16589B" />
        <stop offset={1} stopColor="#1464B7" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsOnedriveIcon;
