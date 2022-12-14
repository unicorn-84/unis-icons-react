import * as React from 'react';
import { SVGProps } from 'react';

const SvgDynamicsCommerceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#dynamics-commerce-icon_svg__a)"
      d="M38.1 23H11.28a1.582 1.582 0 0 1-1.585-1.584l2.317-8.997c0-.878.707-1.585 1.584-1.585h26.82c.877 0 1.584.707 1.584 1.585l-2.316 8.997A1.58 1.58 0 0 1 38.099 23Z"
    />
    <path
      fill="#E76D25"
      d="M33.491 39.75H14.328a1.582 1.582 0 0 1-1.585-1.585l2.316-8.996c0-.878.707-1.585 1.585-1.585h19.163c.878 0 1.585.707 1.585 1.585l-2.316 8.996c0 .878-.732 1.585-1.585 1.585Z"
    />
    <g filter="url(#dynamics-commerce-icon_svg__b)">
      <path
        fill="#F89622"
        d="M23.763 39.75H13.328c-.975 0-1.78-.683-1.975-1.633L6.038 10.639A2.003 2.003 0 0 1 8.013 8.25h7.973c.975 0 1.78.683 1.974 1.634l5.803 29.866Z"
      />
    </g>
    <defs>
      <linearGradient
        id="dynamics-commerce-icon_svg__a"
        x1={9.699}
        x2={42.006}
        y1={16.912}
        y2={16.912}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.391} stopColor="#FFF349" />
        <stop offset={0.49} stopColor="#FFF354" />
        <stop offset={0.652} stopColor="#FFF26F" />
        <stop offset={0.854} stopColor="#FFF28F" />
        <stop offset={0.978} stopColor="#FDF2A4" />
      </linearGradient>
      <filter
        id="dynamics-commerce-icon_svg__b"
        width={21.763}
        height={35.5}
        x={6}
        y={8.25}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2504" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2504"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDynamicsCommerceIcon;
