import * as React from 'react';
import { SVGProps } from 'react';

const SvgCanada = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#canada_svg__a)">
      <g clipPath="url(#canada_svg__b)">
        <mask
          id="canada_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#canada_svg__c)">
          <path fill="#F7FCFF" d="M12 2h18v24H12V2Z" />
          <path
            fill="#E31D1C"
            d="M20.974 9 21 21h-.674l.413-2.97c-3.026.484-4.414.604-4.164.36s.447-.59.591-1.038l-4.041-2.397c.425-.004.81-.098 1.156-.281.346-.183.173-.816-.519-1.9l2.041.264.772-.746 1.54 1.432h.692l-.692-3.28 1.24.615L20.974 9Zm0 0 1.671 2.06 1.24-.617-.692 3.281h.692l1.54-1.432.772.746 2.04-.264c-.691 1.084-.864 1.717-.518 1.9.346.183.731.277 1.156.281l-4.041 2.397c.144.448.34.794.591 1.038.25.244-1.138.124-4.164-.36l.413 2.97H21l-.026-12ZM30 2h9v24h-9V2ZM3 2h9v24H3V2Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="canada_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="canada_svg__a"
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
          result="effect1_dropShadow_91_29059"
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
          in2="effect1_dropShadow_91_29059"
          result="effect2_dropShadow_91_29059"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29059"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCanada;
