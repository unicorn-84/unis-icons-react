import * as React from 'react';
import { SVGProps } from 'react';

const SvgSenegal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#senegal_svg__a)">
      <g clipPath="url(#senegal_svg__b)">
        <mask
          id="senegal_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#senegal_svg__c)">
          <path fill="#FBCD17" d="M14.25 2h13.5v24h-13.5V2Z" />
          <path
            fill="#006923"
            d="m21.085 16.49-3.921 2.418 1.253-4.14-2.879-2.789h3.898l1.65-4.095 1.648 4.095h3.891l-2.872 2.788 1.439 3.897-4.107-2.173Z"
          />
          <path fill="#E11C1B" d="M27.75 2H39v24H27.75V2Z" />
          <path fill="#006923" d="M3 2h11.25v24H3V2Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="senegal_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="senegal_svg__a"
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
          result="effect1_dropShadow_91_25010"
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
          in2="effect1_dropShadow_91_25010"
          result="effect2_dropShadow_91_25010"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25010"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSenegal;
