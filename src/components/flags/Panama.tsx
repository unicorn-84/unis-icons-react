import * as React from 'react';
import { SVGProps } from 'react';

const SvgPanama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#panama_svg__a)">
      <g clipPath="url(#panama_svg__b)">
        <mask
          id="panama_svg__c"
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
        <g mask="url(#panama_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="panama_svg__d"
            width={36}
            height={24}
            x={3}
            y={2}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M3 2v24h36V2H3Z"
              clipRule="evenodd"
            />
          </mask>
          <g fillRule="evenodd" clipRule="evenodd" mask="url(#panama_svg__d)">
            <path
              fill="#E31D1C"
              d="M21 2v12h18V2H21Zm7.899 19.15-2.59 1.424 1.005-2.392-2.202-1.81h2.67l1.117-2.587.851 2.587h2.675l-1.928 1.81.944 2.392-2.542-1.425Z"
            />
            <path
              fill="#2E42A5"
              d="m13.149 10.365-2.59 1.425 1.005-2.392-2.202-1.81h2.67L13.15 5 14 7.587h2.675l-1.928 1.81.944 2.393-2.542-1.425ZM3 14v12h18V14H3Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="panama_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="panama_svg__a"
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
          result="effect1_dropShadow_91_26008"
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
          in2="effect1_dropShadow_91_26008"
          result="effect2_dropShadow_91_26008"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26008"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgPanama;
