import * as React from 'react';
import { SVGProps } from 'react';

const SvgWesternSahara = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#western-sahara_svg__a)">
      <g clipPath="url(#western-sahara_svg__b)">
        <mask
          id="western-sahara_svg__c"
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
          mask="url(#western-sahara_svg__c)"
        >
          <path fill="#F7FCFF" d="M3 2h36v24H3V2Z" />
          <path fill="#272727" d="M3 2v8h36V2H3Z" />
          <path fill="#5EAA22" d="M3 18v8h36v-8H3Z" />
          <path
            fill="#E31D1C"
            d="m3 2 18 12L3 26V2Zm24.399 15.477s-2.56-1.375-2.56-3.646c0-2.272 2.56-3.467 2.56-3.467-1.146-.646-5.118.275-5.118 3.54 0 3.266 3.935 3.869 5.118 3.573Zm2.07-4.165-1.49-1.24.515 1.584-1.441.607 1.77.512.769 1.714.336-1.587 1.749.343-1.323-1.148.447-1.225-1.332.44Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="western-sahara_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="western-sahara_svg__a"
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
          result="effect1_dropShadow_91_28554"
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
          in2="effect1_dropShadow_91_28554"
          result="effect2_dropShadow_91_28554"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28554"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgWesternSahara;
