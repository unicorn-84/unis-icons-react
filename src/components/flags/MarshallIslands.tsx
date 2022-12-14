import * as React from 'react';
import { SVGProps } from 'react';

const SvgMarshallIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#marshall-islands_svg__a)">
      <g clipPath="url(#marshall-islands_svg__b)">
        <mask
          id="marshall-islands_svg__c"
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
        <g mask="url(#marshall-islands_svg__c)">
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="marshall-islands_svg__d"
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
          <g mask="url(#marshall-islands_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m12 13-.92 2.944.01-3.055-1.78 2.614.936-2.94-2.506 2.091 1.793-2.606-3.048 1.412 2.518-2.08-3.363.63 3.056-1.4-3.43-.2 3.367-.615L5.39 8.78l3.429.216L6.007 7.24l3.236 1.03-2.176-2.365L9.87 7.673l-1.377-2.8 2.162 2.375-.476-3.026 1.361 2.806L12 4l.46 3.028 1.361-2.805-.476 3.025 2.162-2.375-1.377 2.8 2.803-1.768-2.176 2.365 3.236-1.03-2.813 1.755 3.429-.216-3.242 1.016 3.367.614-3.43.201 3.056 1.4-3.363-.63 2.518 2.08-3.048-1.412 1.793 2.606-2.506-2.09.935 2.94-1.778-2.615.008 3.055L12 13Z"
              clipRule="evenodd"
            />
            <path fill="#fff" d="m2.12 26.745 38.295-23.53v7.67L2.12 26.746Z" />
            <path
              fill="#E2AE57"
              d="m2.12 26.745 38.295-29.53v7.67L2.12 26.746Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="marshall-islands_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="marshall-islands_svg__a"
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
          result="effect1_dropShadow_91_26524"
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
          in2="effect1_dropShadow_91_26524"
          result="effect2_dropShadow_91_26524"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26524"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMarshallIslands;
