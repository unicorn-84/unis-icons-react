import * as React from 'react';
import { SVGProps } from 'react';

const SvgKoreaNorth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#korea-north_svg__a)">
      <g clipPath="url(#korea-north_svg__b)">
        <mask
          id="korea-north_svg__c"
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
        <g mask="url(#korea-north_svg__c)">
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="korea-north_svg__d"
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
          <g mask="url(#korea-north_svg__d)">
            <path
              fill="#C51918"
              stroke="#F7FCFF"
              strokeWidth={2}
              d="M3 7H2v14h38V7H3Z"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M14.25 19c3.107 0 5.625-2.239 5.625-5s-2.518-5-5.625-5-5.625 2.239-5.625 5 2.518 5 5.625 5Z"
              clipRule="evenodd"
            />
            <path
              fill="#C51918"
              fillRule="evenodd"
              d="m14.244 15.87-3.056 1.89 1.079-3.168L9.3 12.593l3.722-.067L14.244 9.4l1.223 3.126 3.722.067-2.967 2L17.3 17.76l-3.056-1.89Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="korea-north_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="korea-north_svg__a"
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
          result="effect1_dropShadow_91_27012"
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
          in2="effect1_dropShadow_91_27012"
          result="effect2_dropShadow_91_27012"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27012"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgKoreaNorth;
