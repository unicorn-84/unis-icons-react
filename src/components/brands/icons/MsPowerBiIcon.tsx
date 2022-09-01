import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsPowerBiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <mask
      id="ms-power-bi-icon_svg__a"
      width={30}
      height={40}
      x={9}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M25.667 5.667c0-.92.746-1.667 1.666-1.667h10C38.253 4 39 4.746 39 5.667v36.666c0 .92-.746 1.667-1.667 1.667H10.667C9.747 44 9 43.254 9 42.333V25.667c0-.92.746-1.667 1.667-1.667h6.666v-8.333c0-.92.747-1.667 1.667-1.667h6.667V5.667Z"
      />
    </mask>
    <g mask="url(#ms-power-bi-icon_svg__a)">
      <path fill="url(#ms-power-bi-icon_svg__b)" d="M39 4v40H25.667V4H39Z" />
      <g filter="url(#ms-power-bi-icon_svg__c)">
        <path
          fill="#000"
          fillOpacity={0.2}
          d="M30.667 15.833v28.334H17.333v-30H29c.92 0 1.667.746 1.667 1.666Z"
        />
      </g>
      <g filter="url(#ms-power-bi-icon_svg__d)">
        <path
          fill="#000"
          fillOpacity={0.18}
          d="M30.667 16.5v28.333H17.333v-30H29c.92 0 1.667.746 1.667 1.667Z"
        />
      </g>
      <path
        fill="url(#ms-power-bi-icon_svg__e)"
        d="M30.667 15.667V44H17.333V14H29c.92 0 1.667.746 1.667 1.667Z"
      />
      <path
        fill="url(#ms-power-bi-icon_svg__f)"
        d="M9 24v20h13.333V25.667c0-.92-.746-1.667-1.666-1.667H9Z"
      />
    </g>
    <defs>
      <linearGradient
        id="ms-power-bi-icon_svg__b"
        x1={23.444}
        x2={41.027}
        y1={4}
        y2={41.269}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6AD10" />
        <stop offset={1} stopColor="#C87E0E" />
      </linearGradient>
      <linearGradient
        id="ms-power-bi-icon_svg__e"
        x1={17.332}
        x2={32.119}
        y1={14}
        y2={42.678}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6D751" />
        <stop offset={1} stopColor="#E6AD10" />
      </linearGradient>
      <linearGradient
        id="ms-power-bi-icon_svg__f"
        x1={8.999}
        x2={17.17}
        y1={24}
        y2={43.366}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9E589" />
        <stop offset={1} stopColor="#F6D751" />
      </linearGradient>
      <filter
        id="ms-power-bi-icon_svg__c"
        width={14.933}
        height={31.6}
        x={16.533}
        y={13.367}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5_1126"
          stdDeviation={0.4}
        />
      </filter>
      <filter
        id="ms-power-bi-icon_svg__d"
        width={29.333}
        height={46}
        x={9.333}
        y={6.833}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5_1126"
          stdDeviation={4}
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMsPowerBiIcon;
