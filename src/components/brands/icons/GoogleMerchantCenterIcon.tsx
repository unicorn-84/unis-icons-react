import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleMerchantCenterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#google-merchant-center-icon_svg__a)">
      <path
        fill="#518FF5"
        fillRule="evenodd"
        d="M6 14.63h35.982v24.363a2.998 2.998 0 0 1-2.998 2.998H8.998A2.999 2.999 0 0 1 6 38.993V14.629Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#google-merchant-center-icon_svg__b)"
        fillRule="evenodd"
        d="m18.695 31.837 9.345-8.544L42 37.233l-.006 1.76a3.012 3.012 0 0 1-3.01 2.998h-10.09L18.695 31.837Z"
        clipRule="evenodd"
      />
      <path
        fill="#4758B8"
        fillRule="evenodd"
        d="M6 9.007A2.998 2.998 0 0 1 8.998 6.01h29.986a2.998 2.998 0 0 1 2.998 2.998v5.623H6V9.006Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22.492 10.132H18.93a1.312 1.312 0 0 0 0 2.623h10.12a1.311 1.311 0 0 0 0-2.623h-3.56v-.375a1.499 1.499 0 1 0-3 0v.375Z"
        clipRule="evenodd"
      />
      <g filter="url(#google-merchant-center-icon_svg__c)">
        <path
          fill="#000"
          d="M18.061 23.649a1.362 1.362 0 1 1 0-2.724 1.362 1.362 0 0 1 0 2.724Zm14.527 4.184-8.222-8.223a1.816 1.816 0 0 0-1.288-.53h-6.396a1.82 1.82 0 0 0-1.827 1.828v6.395c0 .502.201.96.539 1.288l8.213 8.223c.338.329.795.539 1.298.539.502 0 .96-.21 1.288-.54l6.395-6.395c.338-.328.54-.785.54-1.288 0-.511-.21-.968-.54-1.297Z"
        />
      </g>
      <path
        fill="#fff"
        d="M18.061 23.649a1.362 1.362 0 1 1 0-2.724 1.362 1.362 0 0 1 0 2.724Zm14.527 4.184-8.222-8.223a1.816 1.816 0 0 0-1.288-.53h-6.396a1.82 1.82 0 0 0-1.827 1.828v6.395c0 .502.201.96.539 1.288l8.213 8.223c.338.329.795.539 1.298.539.502 0 .96-.21 1.288-.54l6.395-6.395c.338-.328.54-.785.54-1.288 0-.511-.21-.968-.54-1.297Z"
      />
    </g>
    <defs>
      <linearGradient
        id="google-merchant-center-icon_svg__b"
        x1={42}
        x2={23.746}
        y1={41.991}
        y2={19.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4385F5" />
        <stop offset={1} stopColor="#3569D3" />
      </linearGradient>
      <clipPath id="google-merchant-center-icon_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="google-merchant-center-icon_svg__c"
        width={176.886}
        height={176.886}
        x={-40.05}
        y={-35.824}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={24.402} dy={24.402} />
        <feGaussianBlur stdDeviation={39.654} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_1852" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_1852"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGoogleMerchantCenterIcon;
