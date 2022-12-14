import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnitedArabEmirates = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#united-arab-emirates_svg__a)">
      <g clipPath="url(#united-arab-emirates_svg__b)">
        <mask
          id="united-arab-emirates_svg__c"
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
        <g mask="url(#united-arab-emirates_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M3 2v8h36V2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            fillRule="evenodd"
            d="M3 18v8h36v-8H3Z"
            clipRule="evenodd"
          />
          <path fill="#E31D1C" d="M3 2h11.25v24H3z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="united-arab-emirates_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="united-arab-emirates_svg__a"
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
          result="effect1_dropShadow_91_29976"
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
          in2="effect1_dropShadow_91_29976"
          result="effect2_dropShadow_91_29976"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29976"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgUnitedArabEmirates;
