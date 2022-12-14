import * as React from 'react';
import { SVGProps } from 'react';

const SvgBurundi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#burundi_svg__a)">
      <g clipPath="url(#burundi_svg__b)">
        <mask
          id="burundi_svg__c"
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
        <g mask="url(#burundi_svg__c)">
          <rect width={36} height={24} x={3} y={2} fill="#5EAA22" rx={2} />
          <mask
            id="burundi_svg__d"
            width={54}
            height={30}
            x={-6}
            y={-1}
            fill="#000"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" d="M-6-1h54v30H-6z" />
            <path
              fillRule="evenodd"
              d="M21 14 39 2H3l18 12Zm0 0L3 26h36L21 14Z"
              clipRule="evenodd"
            />
          </mask>
          <path
            fill="#DD2C2B"
            fillRule="evenodd"
            d="M21 14 39 2H3l18 12Zm0 0L3 26h36L21 14Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="m39 2 1.387 2.08 6.87-4.58H39V2ZM3 2V-.5h-8.257l6.87 4.58L3 2Zm0 24-1.387-2.08-6.87 4.58H3V26Zm36 0v2.5h8.257l-6.87-4.58L39 26ZM37.613-.08l-18 12 2.774 4.16 18-12-2.774-4.16ZM3 4.5h36v-5H3v5Zm19.387 7.42-18-12-2.774 4.16 18 12 2.774-4.16Zm-2.774 0-18 12 2.774 4.16 18-12-2.774-4.16ZM3 28.5h36v-5H3v5Zm37.387-4.58-18-12-2.774 4.16 18 12 2.774-4.16Z"
            mask="url(#burundi_svg__d)"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M21 20c3.728 0 6.75-2.686 6.75-6S24.728 8 21 8s-6.75 2.686-6.75 6 3.022 6 6.75 6Z"
            clipRule="evenodd"
          />
          <path
            fill="#DD2C2B"
            fillRule="evenodd"
            stroke="#5EAA22"
            strokeWidth={0.25}
            d="m20.359 12.387-1.308.013.666-1-.666-1 1.308.013.64-1.013.642 1.013 1.307-.013-.666 1 .666 1-1.307-.013L21 13.4l-.641-1.013Zm-2.813 4.1-1.307.013.666-1-.666-1 1.307.013.641-1.013.642 1.013 1.307-.013-.666 1 .666 1-1.307-.013-.642 1.013-.64-1.013Zm5.625 0-1.307.013.666-1-.666-1 1.307.013.641-1.013.642 1.013 1.307-.013-.666 1 .666 1-1.307-.013-.642 1.013-.64-1.013Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="burundi_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="burundi_svg__a"
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
          result="effect1_dropShadow_91_29622"
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
          in2="effect1_dropShadow_91_29622"
          result="effect2_dropShadow_91_29622"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29622"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgBurundi;
