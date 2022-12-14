import * as React from 'react';
import { SVGProps } from 'react';

const SvgVenezuela = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#venezuela_svg__a)">
      <g clipPath="url(#venezuela_svg__b)">
        <mask
          id="venezuela_svg__c"
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
        <g mask="url(#venezuela_svg__c)">
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="venezuela_svg__d"
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
            mask="url(#venezuela_svg__d)"
          >
            <path fill="#FECA00" d="M3 2v8h36V2H3Z" />
            <path fill="#E31D1C" d="M3 18v8h36v-8H3Z" />
            <path
              fill="#F7FCFF"
              d="m17.33 13.86 1.105-.558 1.24.557-.445-1.133.926-.833h-1.18l-.543-1.072-.464 1.072h-1.383l1.04.818h-1.167l-.544-1.072-.463 1.072h-1.384l1.06.833-.203.726h-.883l-.544-1.072-.464 1.072h-1.383l1.06.833-.197.703h-.386l-.544-1.073-.464 1.073H9.737l1.059.832-.316 1.133 1.106-.557 1.24.557-.445-1.133.926-.832h-.06l.253-.128 1.24.558-.445-1.133.53-.477-.013.05 1.105-.557 1.24.558-.445-1.133.92-.828.013.01-.316 1.133Zm7.296-.045-1.106-.557-1.24.557.445-1.133-.926-.832h1.179l.544-1.073.464 1.073h1.383l-1.04.817h1.172l.544-1.072.464 1.072h1.383l-1.059.833.203.726h.882l.544-1.072.464 1.072h1.383l-1.059.833.196.703h.386l.544-1.073.464 1.073h1.384l-1.06.832.316 1.133-1.105-.557-1.24.557.445-1.133-.927-.832h.06l-.253-.128-1.24.558.446-1.133-.531-.477.014.05-1.106-.557-1.24.558.445-1.133-.923-.83-.015.012.316 1.133Z"
            />
            <path
              fill="#F7FCFF"
              d="m20.812 12.534-1.105.558.315-1.133-1.059-.833h1.384l.463-1.072.545 1.072h1.179l-.927.833.446 1.133-1.24-.558Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="venezuela_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="venezuela_svg__a"
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
          result="effect1_dropShadow_91_24097"
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
          in2="effect1_dropShadow_91_24097"
          result="effect2_dropShadow_91_24097"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24097"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgVenezuela;
