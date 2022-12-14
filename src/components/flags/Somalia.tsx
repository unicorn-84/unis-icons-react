import * as React from 'react';
import { SVGProps } from 'react';

const SvgSomalia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#somalia_svg__a)">
      <g clipPath="url(#somalia_svg__b)">
        <mask
          id="somalia_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#somalia_svg__c)">
          <path fill="#56C6F5" d="M3 2h36v24H3V2Z" />
          <path
            fill="#F7FCFF"
            d="m21.201 16.717-4.234 2.393 1.42-4.189-3.02-2.737 4.164-.08 1.842-4.137 1.679 4.19 4.154.065-3.122 2.788 1.458 3.985-4.34-2.278Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="somalia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="somalia_svg__a"
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
          result="effect1_dropShadow_91_25003"
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
          in2="effect1_dropShadow_91_25003"
          result="effect2_dropShadow_91_25003"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25003"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSomalia;
