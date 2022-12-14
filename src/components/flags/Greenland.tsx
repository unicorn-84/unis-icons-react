import * as React from 'react';
import { SVGProps } from 'react';

const SvgGreenland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#greenland_svg__a)">
      <g clipPath="url(#greenland_svg__b)">
        <mask
          id="greenland_svg__c"
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
        <g mask="url(#greenland_svg__c)">
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 14h36v12H3V14Z"
            clipRule="evenodd"
          />
          <mask
            id="greenland_svg__d"
            width={36}
            height={12}
            x={3}
            y={14}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M3 14h36v12H3V14Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#greenland_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M16.5 22c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8 4.03 8 9 8Z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v12H3V2Z"
            clipRule="evenodd"
          />
          <mask
            id="greenland_svg__e"
            width={36}
            height={12}
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
              d="M3 2h36v12H3V2Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#greenland_svg__e)">
            <path
              fill="#C51918"
              fillRule="evenodd"
              d="M16.5 22c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8 4.03 8 9 8Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="greenland_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="greenland_svg__a"
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
          result="effect1_dropShadow_91_28058"
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
          in2="effect1_dropShadow_91_28058"
          result="effect2_dropShadow_91_28058"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28058"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGreenland;
