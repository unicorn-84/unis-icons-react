import * as React from 'react';
import { SVGProps } from 'react';

const SvgBonaire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#bonaire_svg__a)">
      <g clipPath="url(#bonaire_svg__b)">
        <mask
          id="bonaire_svg__c"
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
        <g mask="url(#bonaire_svg__c)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#FEDA00"
            fillRule="evenodd"
            d="M3 12.933V2h18L3 12.933Z"
            clipRule="evenodd"
          />
          <path
            fill="#00268D"
            fillRule="evenodd"
            d="M3 26h36.01V2L3 26Z"
            clipRule="evenodd"
          />
          <mask id="bonaire_svg__d" fill="#fff">
            <path
              fillRule="evenodd"
              d="m13.522 7 .593 1.131c2.414.256 4.295 2.057 4.356 4.258l1.074.478-1.173.521c-.42 1.823-2.11 3.235-4.21 3.476L13.522 18l-.639-1.136c-2.1-.241-3.79-1.653-4.21-3.476L7.5 12.867l1.074-.478c.06-2.19 1.92-3.982 4.316-4.253L13.521 7Z"
              clipRule="evenodd"
            />
          </mask>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m13.522 7 .593 1.131c2.414.256 4.295 2.057 4.356 4.258l1.074.478-1.173.521c-.42 1.823-2.11 3.235-4.21 3.476L13.522 18l-.639-1.136c-2.1-.241-3.79-1.653-4.21-3.476L7.5 12.867l1.074-.478c.06-2.19 1.92-3.982 4.316-4.253L13.521 7Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="m14.115 8.131-.701.368.196.375.422.045.083-.788ZM13.522 7l.702-.368-.68-1.297-.713 1.28.691.385Zm4.949 5.39-.792.021.014.5.456.202.322-.724Zm1.074.477.322.723 1.628-.723-1.628-.724-.322.724Zm-1.173.521-.322-.723-.361.16-.09.385.773.178Zm-4.21 3.476-.09-.787-.402.046-.199.352.69.389ZM13.522 18l-.69.388.69 1.227.69-1.227-.69-.388Zm-.639-1.136.69-.389-.198-.352-.402-.046-.09.787Zm-4.21-3.476.772-.178-.089-.385-.36-.16-.323.723ZM7.5 12.867l-.322-.724-1.628.724 1.628.723.322-.723Zm1.074-.478.322.724.456-.203.014-.499-.792-.022Zm4.316-4.253.089.787.404-.046.198-.356-.691-.385Zm1.927-.372-.593-1.132-1.403.736.593 1.13 1.403-.734Zm4.446 4.603c-.074-2.67-2.333-4.734-5.064-5.023l-.167 1.575c2.096.222 3.6 1.76 3.647 3.492l1.584-.044Zm.604-.224-1.074-.477-.644 1.447 1.074.477.644-1.447Zm-1.174 1.969 1.174-.522-.644-1.447-1.173.521.643 1.448Zm-4.441 3.539c2.385-.274 4.385-1.89 4.891-4.085L17.6 13.21c-.335 1.45-1.712 2.659-3.529 2.867l.18 1.573Zm-.78-1.176-.64 1.137 1.38.776.64-1.136-1.38-.777Zm.74 1.137-.638-1.137-1.381.777.64 1.136 1.38-.776Zm-6.31-4.046c.506 2.195 2.506 3.811 4.891 4.085l.18-1.574c-1.817-.209-3.193-1.416-3.528-2.867l-1.543.356Zm-.724.024 1.174.522.643-1.447-1.173-.522-.644 1.447Zm1.074-1.924-1.074.477.644 1.447 1.074-.477-.644-1.447ZM12.8 7.349c-2.71.307-4.944 2.363-5.018 5.018l1.584.044c.048-1.723 1.534-3.253 3.613-3.488L12.8 7.349Zm.03-.735-.632 1.136 1.383.771.633-1.135-1.383-.772Z"
            mask="url(#bonaire_svg__d)"
          />
          <path
            fill="#F00A17"
            fillRule="evenodd"
            d="m13.548 10.3-.73 1.09h-1.44l.717 1.143-.718 1.098h1.44l.73 1.12.742-1.12h1.427l-.7-1.098.7-1.144H14.29l-.741-1.089Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="bonaire_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="bonaire_svg__a"
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
          result="effect1_dropShadow_91_29405"
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
          in2="effect1_dropShadow_91_29405"
          result="effect2_dropShadow_91_29405"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29405"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgBonaire;
