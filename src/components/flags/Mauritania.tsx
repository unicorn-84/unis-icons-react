import * as React from 'react';
import { SVGProps } from 'react';

const SvgMauritania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#mauritania_svg__a)">
      <g clipPath="url(#mauritania_svg__b)">
        <mask
          id="mauritania_svg__c"
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
        <g mask="url(#mauritania_svg__c)">
          <path
            fill="#1C7B4D"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="mauritania_svg__d"
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
            mask="url(#mauritania_svg__d)"
          >
            <path fill="#E31D1C" d="M3 2v6h36V2H3Zm0 18v6h36v-6H3Z" />
            <path
              fill="#FECA00"
              d="M21.272 16.379c5.834.028 7.477-4.314 7.477-4.314-.33 3.715-2.642 6.234-7.477 6.234-4.834 0-6.61-3.263-7.476-6.518 0 0 1.643 4.569 7.476 4.598Z"
            />
            <path
              fill="#FECA00"
              d="m22.842 11.814.379 1.963-1.984-.927-1.984.927.379-1.963-1.605-1.534h2.218l.992-1.93.992 1.93h2.218l-1.605 1.534Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mauritania_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mauritania_svg__a"
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
          result="effect1_dropShadow_91_26366"
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
          in2="effect1_dropShadow_91_26366"
          result="effect2_dropShadow_91_26366"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26366"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMauritania;
