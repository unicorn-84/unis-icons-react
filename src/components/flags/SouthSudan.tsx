import * as React from 'react';
import { SVGProps } from 'react';

const SvgSouthSudan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#south-sudan_svg__a)">
      <g clipPath="url(#south-sudan_svg__b)">
        <mask
          id="south-sudan_svg__c"
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
        <g mask="url(#south-sudan_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            fillRule="evenodd"
            d="M3 2v8h36V2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#4E8B1D"
            fillRule="evenodd"
            d="M3 18v8h36v-8H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            stroke="#F7FCFF"
            strokeWidth={2}
            d="M3 9H2v10h38V9H3Z"
          />
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="m3 2 22.5 12L3 26V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="m10.479 16.408-2.272 2.1-.237-2.985-2.898-1.587 3.022-.842.494-2.958 2.092 2.342 3.051-.727-1.577 2.775 1.534 2.677-3.209-.795Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="south-sudan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="south-sudan_svg__a"
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
          result="effect1_dropShadow_91_24985"
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
          in2="effect1_dropShadow_91_24985"
          result="effect2_dropShadow_91_24985"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24985"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSouthSudan;
