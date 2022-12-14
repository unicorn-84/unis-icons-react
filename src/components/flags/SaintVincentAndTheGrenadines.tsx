import * as React from 'react';
import { SVGProps } from 'react';

const SvgSaintVincentAndTheGrenadines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#saint-vincent-and-the-grenadines_svg__a)">
      <g clipPath="url(#saint-vincent-and-the-grenadines_svg__b)">
        <mask
          id="saint-vincent-and-the-grenadines_svg__c"
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
          mask="url(#saint-vincent-and-the-grenadines_svg__c)"
        >
          <path fill="#FFDC17" d="M12 2h18v24H12V2Z" />
          <path fill="#5FBF2B" d="M30 2h9v24h-9V2Z" />
          <path fill="#2E42A5" d="M3 2h9v24H3V2Z" />
          <path
            fill="#5FBF2B"
            d="m25.192 7.6-3.42 4.463 3.42 4.305 3.42-4.305-3.42-4.463Zm-8.38.079-3.687 4.384 3.42 4.226 3.42-4.226-3.153-4.384Zm.636 9.31 3.687-4.384 3.154 4.384-3.154 4.512-3.687-4.512Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="saint-vincent-and-the-grenadines_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="saint-vincent-and-the-grenadines_svg__a"
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
          result="effect1_dropShadow_91_24117"
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
          in2="effect1_dropShadow_91_24117"
          result="effect2_dropShadow_91_24117"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24117"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSaintVincentAndTheGrenadines;
