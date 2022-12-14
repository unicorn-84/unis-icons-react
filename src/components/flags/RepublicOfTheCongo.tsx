import * as React from 'react';
import { SVGProps } from 'react';

const SvgRepublicOfTheCongo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#republic-of-the-congo_svg__a)">
      <g clipPath="url(#republic-of-the-congo_svg__b)">
        <mask
          id="republic-of-the-congo_svg__c"
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
        <g
          fillRule="evenodd"
          clipRule="evenodd"
          mask="url(#republic-of-the-congo_svg__c)"
        >
          <path fill="#FA1111" d="M39 2v24H3L39 2Z" />
          <path fill="#07A907" d="M3 26V2h36L3 26Z" />
          <path
            fill="#FBCD17"
            d="M36.178-3.8 1.875 25.576l6.808 3.012 33.288-26.8L36.178-3.8Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="republic-of-the-congo_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="republic-of-the-congo_svg__a"
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
          result="effect1_dropShadow_91_29011"
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
          in2="effect1_dropShadow_91_29011"
          result="effect2_dropShadow_91_29011"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29011"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgRepublicOfTheCongo;
