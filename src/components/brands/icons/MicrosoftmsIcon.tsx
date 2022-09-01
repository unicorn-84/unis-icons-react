import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrosoftmsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <mask
      id="microsoftms-icon_svg__a"
      width={40}
      height={32}
      x={4}
      y={8}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M29.612 8.116c.476 0 .929.203 1.246.557l12.716 14.212a1.672 1.672 0 0 1 0 2.23L30.858 39.327c-.317.354-.77.557-1.246.557H5.675c-1.445 0-2.21-1.71-1.246-2.787L16.148 24 4.429 10.903c-.963-1.077-.199-2.787 1.246-2.787h23.937Z"
      />
    </mask>
    <g mask="url(#microsoftms-icon_svg__a)">
      <path
        fill="url(#microsoftms-icon_svg__b)"
        d="M30.36 8.116 16.148 24 1.936 8.116H30.36Z"
      />
      <g filter="url(#microsoftms-icon_svg__c)">
        <path
          fill="#000"
          fillOpacity={0.24}
          d="M30.36 8.283 1.936 40.051H30.36l14.212-15.884L30.36 8.283Z"
        />
      </g>
      <g filter="url(#microsoftms-icon_svg__d)">
        <path
          fill="#000"
          fillOpacity={0.32}
          d="M30.36 8.952 1.936 40.72H30.36l14.212-15.884L30.36 8.952Z"
        />
      </g>
      <path
        fill="url(#microsoftms-icon_svg__e)"
        d="M1.936 39.884 30.36 8.116 44.572 24 30.36 39.884H1.936Z"
      />
      <path
        fill="url(#microsoftms-icon_svg__f)"
        d="M1.936 39.884 30.36 8.116l7.106 7.942-21.318 23.826H1.936Z"
      />
    </g>
    <defs>
      <linearGradient
        id="microsoftms-icon_svg__b"
        x1={22}
        x2={16.148}
        y1={26.926}
        y2={8.116}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D36A5" />
        <stop offset={1} stopColor="#1152D4" />
      </linearGradient>
      <linearGradient
        id="microsoftms-icon_svg__e"
        x1={23.254}
        x2={23.254}
        y1={8.116}
        y2={39.884}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#84CAFF" />
        <stop offset={1} stopColor="#61B1FB" />
      </linearGradient>
      <linearGradient
        id="microsoftms-icon_svg__f"
        x1={19.701}
        x2={19.701}
        y1={8.116}
        y2={39.884}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B90F5" />
        <stop offset={1} stopColor="#2A78EE" />
      </linearGradient>
      <filter
        id="microsoftms-icon_svg__c"
        width={44.236}
        height={33.368}
        x={1.136}
        y={7.483}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5_1196"
          stdDeviation={0.4}
        />
      </filter>
      <filter
        id="microsoftms-icon_svg__d"
        width={58.636}
        height={47.768}
        x={-6.064}
        y={0.952}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5_1196"
          stdDeviation={4}
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMicrosoftmsIcon;
