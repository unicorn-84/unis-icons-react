import * as React from 'react';
import { SVGProps } from 'react';

const SvgNamibia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#namibia_svg__a)">
      <g clipPath="url(#namibia_svg__b)">
        <mask
          id="namibia_svg__c"
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
        <g mask="url(#namibia_svg__c)">
          <path
            fill="#093"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="namibia_svg__d"
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
          <g mask="url(#namibia_svg__d)">
            <path
              fill="#3195F9"
              fillRule="evenodd"
              d="M3 2v24L39 2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#E31D1C"
              stroke="#F7FCFF"
              strokeWidth={2}
              d="m1.996 29.138.522.84.846-.512 39.185-23.71.804-.486-.435-.832-2.635-5.04-.488-.934-.907.537L-.888 22.558l-.878.52.539.868 3.223 5.192Z"
            />
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="M10.008 11.245 8.553 12.86 8.2 10.814l-2.169.751.845-1.928-2.3-.313L6.391 8.03 4.575 6.736l2.301-.314-.845-1.928 2.169.751.353-2.045 1.455 1.615L11.464 3.2l.353 2.045 2.169-.75-.845 1.927 2.3.314-1.816 1.294 1.817 1.294-2.301.313.845 1.928-2.169-.75-.353 2.045-1.456-1.615Zm0-.715c1.554 0 2.813-1.12 2.813-2.5s-1.26-2.5-2.813-2.5c-1.553 0-2.812 1.12-2.812 2.5s1.26 2.5 2.813 2.5Zm2.25-2.5c0 1.104-1.007 2-2.25 2-1.242 0-2.25-.896-2.25-2 0-1.105 1.008-2 2.25-2 1.243 0 2.25.895 2.25 2Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="namibia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="namibia_svg__a"
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
          result="effect1_dropShadow_91_26209"
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
          in2="effect1_dropShadow_91_26209"
          result="effect2_dropShadow_91_26209"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26209"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgNamibia;
