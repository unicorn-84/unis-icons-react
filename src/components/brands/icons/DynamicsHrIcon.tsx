import * as React from 'react';
import { SVGProps } from 'react';

const SvgDynamicsHrIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#5E469B"
      d="M40.274 42H7.753c-.967 0-1.74-.773-1.74-1.74V7.74c0-.967.773-1.74 1.74-1.74h32.494c.966 0 1.739.773 1.739 1.74v32.493A1.699 1.699 0 0 1 40.274 42Z"
    />
    <g filter="url(#dynamics-hr-icon_svg__a)">
      <path
        fill="#A886BC"
        d="M31.523 42H6.013V15.745h23.19c1.27 0 2.32 1.05 2.32 2.32V42Z"
      />
    </g>
    <g filter="url(#dynamics-hr-icon_svg__b)">
      <path
        fill="#E0C6DE"
        d="M21.253 42H6.013V26.291h13.445c.994 0 1.795.801 1.795 1.795V42Z"
      />
    </g>
    <g filter="url(#dynamics-hr-icon_svg__c)">
      <path
        fill="#E0C6DE"
        d="M13.799 23.696a7.785 7.785 0 1 0 0-15.57 7.785 7.785 0 0 0 0 15.57Z"
      />
    </g>
    <defs>
      <filter
        id="dynamics-hr-icon_svg__a"
        width={29.509}
        height={30.255}
        x={6.013}
        y={13.745}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2496" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2496"
          result="shape"
        />
      </filter>
      <filter
        id="dynamics-hr-icon_svg__b"
        width={19.239}
        height={19.709}
        x={6.013}
        y={24.291}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2496" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2496"
          result="shape"
        />
      </filter>
      <filter
        id="dynamics-hr-icon_svg__c"
        width={18.071}
        height={17.571}
        x={6.013}
        y={7.126}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2496" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2496"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDynamicsHrIcon;
