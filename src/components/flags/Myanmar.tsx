import * as React from 'react';
import { SVGProps } from 'react';

const SvgMyanmar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#myanmar_svg__a)">
      <g clipPath="url(#myanmar_svg__b)">
        <mask
          id="myanmar_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#myanmar_svg__c)">
          <path fill="#E31D1C" d="M3 18h36v8H3v-8Z" />
          <path fill="#5EAA22" d="M3 10h36v8H3v-8Z" />
          <path fill="#FFD018" d="M3 2h36v8H3V2Z" />
          <path
            fill="#F7FCFF"
            d="m21.07 17.976-5.795 3.274 1.944-5.733-4.134-3.745 5.699-.11 2.52-5.66 2.298 5.734 5.685.088-4.272 3.814 1.995 5.454-5.94-3.116Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="myanmar_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="myanmar_svg__a"
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
          result="effect1_dropShadow_91_26492"
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
          in2="effect1_dropShadow_91_26492"
          result="effect2_dropShadow_91_26492"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26492"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMyanmar;
