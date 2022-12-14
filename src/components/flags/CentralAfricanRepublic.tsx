import * as React from 'react';
import { SVGProps } from 'react';

const SvgCentralAfricanRepublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#central-african-republic_svg__a)">
      <g clipPath="url(#central-african-republic_svg__b)">
        <mask
          id="central-african-republic_svg__c"
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
        <g
          fillRule="evenodd"
          clipRule="evenodd"
          mask="url(#central-african-republic_svg__c)"
        >
          <path fill="#3D58DB" d="M3 2h36v6H3V2Z" />
          <path fill="#F7FCFF" d="M3 8h36v6H3V8Z" />
          <path fill="#73BE4A" d="M3 14h36v6H3v-6Z" />
          <path fill="#FFD018" d="M3 20h36v6H3v-6Z" />
          <path
            fill="#FECA00"
            d="M8.096 7.416 5.368 9.098l.872-2.88-2.003-1.84 2.712-.1L8.096 1.43l1.147 2.848h2.707l-1.998 1.94 1 2.71-2.856-1.512Z"
          />
          <path fill="#E11C1B" d="M16.5 2h9v24h-9V2Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="central-african-republic_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="central-african-republic_svg__a"
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
          result="effect1_dropShadow_91_29020"
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
          in2="effect1_dropShadow_91_29020"
          result="effect2_dropShadow_91_29020"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29020"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCentralAfricanRepublic;
