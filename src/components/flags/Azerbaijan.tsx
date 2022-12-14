import * as React from 'react';
import { SVGProps } from 'react';

const SvgAzerbaijan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#azerbaijan_svg__a)">
      <g clipPath="url(#azerbaijan_svg__b)">
        <mask
          id="azerbaijan_svg__c"
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
        <g mask="url(#azerbaijan_svg__c)">
          <path
            fill="#AF0100"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="azerbaijan_svg__d"
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
          <g
            fillRule="evenodd"
            clipRule="evenodd"
            mask="url(#azerbaijan_svg__d)"
          >
            <path fill="#3CA5D9" d="M3 2v8h36V2H3Z" />
            <path fill="#73BE4A" d="M3 18v8h36v-8H3Z" />
            <path
              fill="#F7FCFF"
              d="M22.282 17.024c-1.515-.31-2.846-1.47-2.83-3.024.015-1.455.978-2.632 2.644-2.966 1.667-.335 3.395.3 3.395.3-.46-.907-2.058-1.544-3.37-1.541-2.442.006-5.046 1.663-5.072 4.193-.026 2.623 2.782 4.114 5.254 4.108 1.981-.005 2.922-1.138 3.118-1.62 0 0-1.623.86-3.139.55Zm.988-1.603 1.322-.818 1.323.818-.467-1.371 1.284-.865-1.61-.03-.53-1.352-.529 1.352-1.61.03 1.283.865-.466 1.37Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="azerbaijan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="azerbaijan_svg__a"
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
          result="effect1_dropShadow_91_29690"
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
          in2="effect1_dropShadow_91_29690"
          result="effect2_dropShadow_91_29690"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29690"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAzerbaijan;
