import * as React from 'react';
import { SVGProps } from 'react';

const SvgAntiguaAndBarbuda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#antigua-and-barbuda_svg__a)">
      <g clipPath="url(#antigua-and-barbuda_svg__b)">
        <mask
          id="antigua-and-barbuda_svg__c"
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
        <g mask="url(#antigua-and-barbuda_svg__c)">
          <path
            fill="#1B1B1B"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#F9D313"
            fillRule="evenodd"
            d="m21 16-2.253 3.8.056-4.196-4.116 2.65 2.355-3.76-5.164.977 4.186-2.58L10.875 12l5.19-.89-4.187-2.581 5.164.977-2.355-3.76 4.117 2.65-.057-4.195L21 8l2.253-3.8-.056 4.196 4.116-2.65-2.355 3.76 5.164-.977-4.186 2.58 5.189.891-5.19.89 4.187 2.581-5.164-.977 2.355 3.76-4.116-2.65.056 4.195L21 16Z"
            clipRule="evenodd"
          />
          <path fill="#F1F9FF" d="M9.75 16h22.5v10H9.75z" />
          <path fill="#4A80E8" d="M5.25 12h31.5v4H5.25z" />
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="m3 8 18 18L39 8v18H3V8Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="antigua-and-barbuda_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="antigua-and-barbuda_svg__a"
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
          result="effect1_dropShadow_91_29925"
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
          in2="effect1_dropShadow_91_29925"
          result="effect2_dropShadow_91_29925"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29925"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAntiguaAndBarbuda;
