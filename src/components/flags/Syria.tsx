import * as React from 'react';
import { SVGProps } from 'react';

const SvgSyria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#syria_svg__a)">
      <g clipPath="url(#syria_svg__b)">
        <mask
          id="syria_svg__c"
          width={36}
          height={24}
          x={3}
          y={2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path fill="#fff" d="M3 2h36v24H3z" />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#syria_svg__c)">
          <path fill="#F7FCFF" d="M3 2h36v24H3V2Z" />
          <path
            fill="#409100"
            d="M13.126 15.247 11.723 16l.32-1.47-1.168-1.099 1.582-.06.67-1.371.669 1.372h1.579l-1.166 1.159L14.56 16l-1.434-.753Zm15.75 0L27.473 16l.32-1.47-1.168-1.099 1.582-.06.67-1.371.669 1.372h1.579l-1.166 1.159L30.31 16l-1.434-.753Z"
          />
          <path fill="#E31D1C" d="M3 2v8h36V2H3Z" />
          <path fill="#272727" d="M3 18v8h36v-8H3Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="syria_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="syria_svg__a"
        width={42}
        height={30}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_24918"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_91_24918"
          result="effect2_dropShadow_91_24918"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24918"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSyria;
