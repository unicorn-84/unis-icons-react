import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpectrumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#spectrum-icon_svg__a)"
      d="M3 17.4c0-5.04 0-7.56.98-9.486a9 9 0 0 1 3.934-3.933C9.84 3 12.36 3 17.4 3h13.2c5.04 0 7.56 0 9.486.98a9 9 0 0 1 3.933 3.934C45 9.84 45 12.36 45 17.4v13.2c0 5.04 0 7.56-.98 9.486a9 9 0 0 1-3.934 3.933C38.16 45 35.64 45 30.6 45H17.4c-5.04 0-7.56 0-9.486-.98a9 9 0 0 1-3.933-3.934C3 38.16 3 35.64 3 30.6V17.4Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.867 16.02c0-1.189.964-2.153 2.153-2.153 9.945 0 18.007 8.063 18.007 18.008a2.205 2.205 0 0 1-2.205 2.205h-5.565a2.205 2.205 0 0 1-2.205-2.205 8.032 8.032 0 0 0-8.032-8.033 2.152 2.152 0 0 1-2.153-2.152v-5.67Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="spectrum-icon_svg__a"
        x1={45}
        x2={3}
        y1={45}
        y2={3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3D35DE" />
        <stop offset={0.265} stopColor="#5137E8" />
        <stop offset={1} stopColor="#793CF8" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgSpectrumIcon;
