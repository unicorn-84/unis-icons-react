import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleFinderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <g filter="url(#apple-finder-icon_svg__a)">
      <rect
        width={32}
        height={27.429}
        x={8}
        y={10.286}
        fill="#283544"
        rx={13.714}
      />
    </g>
    <path
      fill="url(#apple-finder-icon_svg__b)"
      fillRule="evenodd"
      d="M25.389 10.286h13.645c.483 0 .845.33.966.881v25.666c0 .44-.483.881-.966.881h-11.11c-.482-1.542-.724-3.084-.965-4.626 2.898-.551 5.554-1.873 7.366-3.966.603-.881-.483-1.432-.966-.881-1.329 1.983-3.865 3.195-6.521 3.635-.362-4.406 0-7.931 0-7.931h-4.71s0-7.05 3.26-13.66Zm6.038 10.354c.603 0 .966-.44.966-.88v-1.763c0-.551-.483-.882-.966-.882-.604 0-.966.441-.966.882v1.762c0 .55.483.881.966.881Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#apple-finder-icon_svg__c)"
      fillRule="evenodd"
      d="M23.94 33.308c-3.985 0-7.97-1.432-10.385-4.186-.604-.881.483-1.432.966-.881 1.932 2.534 5.675 3.855 9.419 3.855.864 0 1.932-.11 1.932-.11-.363-3.084-.242-5.838-.121-7.16h-4.589v-.881s0-7.05 3.26-13.66H8.967c-.604 0-.966.441-.966.882v25.666c0 .44.483.881.966.881h17.891l-.17-.704c-.296-1.203-.568-2.315-.695-3.812 0 0-1.403.11-2.052.11Zm-7.487-16.193c-.604 0-.966.441-.966.882v1.762c0 .44.483.771.966.771s.966-.33.966-.77v-1.763c0-.441-.362-.882-.966-.882Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="apple-finder-icon_svg__b"
        x1={31.064}
        x2={31.064}
        y1={10.286}
        y2={37.714}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7F6F7" />
        <stop offset={1} stopColor="#D9E4F0" />
      </linearGradient>
      <linearGradient
        id="apple-finder-icon_svg__c"
        x1={17.429}
        x2={17.429}
        y1={10.286}
        y2={37.714}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2FD4FB" />
        <stop offset={1} stopColor="#2777EE" />
      </linearGradient>
      <filter
        id="apple-finder-icon_svg__a"
        width={34}
        height={29.429}
        x={7}
        y={9.786}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2899" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2899"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAppleFinderIcon;
