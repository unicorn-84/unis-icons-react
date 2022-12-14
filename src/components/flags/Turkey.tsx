import * as React from 'react';
import { SVGProps } from 'react';

const SvgTurkey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#turkey_svg__a)">
      <g clipPath="url(#turkey_svg__b)">
        <mask
          id="turkey_svg__c"
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
        <g mask="url(#turkey_svg__c)">
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="turkey_svg__d"
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
          <g mask="url(#turkey_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M21.029 18.114c-2.41-.528-4.296-2.32-4.274-4.948.02-2.459 1.695-4.538 4.344-5.1 2.648-.563 4.98.631 4.98.631-.733-1.536-3.275-2.614-5.36-2.611-3.88.005-8.017 2.803-8.053 7.08-.037 4.435 4.43 6.961 8.358 6.955 3.15-.004 4.643-1.92 4.953-2.734 0 0-2.54 1.254-4.948.727Zm5.487-5.787-2.4.783 2.708.85-.046 2.537 1.784-1.904 2.948.19L29.174 13l1.534-1.904-2.497.747-1.785-1.764.09 2.249Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="turkey_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="turkey_svg__a"
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
          result="effect1_dropShadow_91_24439"
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
          in2="effect1_dropShadow_91_24439"
          result="effect2_dropShadow_91_24439"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24439"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgTurkey;
