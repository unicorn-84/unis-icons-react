import * as React from 'react';
import { SVGProps } from 'react';

const SvgSingapore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#singapore_svg__a)">
      <g clipPath="url(#singapore_svg__b)">
        <mask
          id="singapore_svg__c"
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
        <g mask="url(#singapore_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="singapore_svg__d"
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
            mask="url(#singapore_svg__d)"
          >
            <path fill="#E31D1C" d="M3 2v12h36V2H3Z" />
            <path
              fill="#F1F9FF"
              d="M12.977 12.59s-3.179-1.137-3.179-4.216c0-3.08 3.18-4.179 3.18-4.179-1.546-.348-5.645-.037-5.645 4.179s4.037 5.01 5.644 4.216Zm.815-.51.912-.489.932.49-.228-.955.757-.754H15.14l-.435-.891-.436.891-1.028.039.76.715-.208.955Zm4.226-.543-.912.489.208-.955-.76-.715 1.03-.038.434-.892.435.892h1.027l-.758.753.228.955-.932-.49Zm-2.32-3.767.912-.49.932.49-.228-.955.758-.753h-1.027l-.435-.892-.435.892-1.028.038.76.715-.209.955Zm-2.157 1.453-.912.489.208-.955-.76-.715 1.03-.038.434-.892.435.892h1.027l-.758.753.228.955-.932-.49Zm5.116.445.912-.49.933.49-.229-.955.758-.753h-1.026l-.436-.892-.435.892-1.028.038.76.715-.209.955Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="singapore_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="singapore_svg__a"
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
          result="effect1_dropShadow_91_25223"
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
          in2="effect1_dropShadow_91_25223"
          result="effect2_dropShadow_91_25223"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25223"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSingapore;
