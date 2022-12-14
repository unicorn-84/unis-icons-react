import * as React from 'react';
import { SVGProps } from 'react';

const SvgChristmasIsland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#christmas-island_svg__a)">
      <g clipPath="url(#christmas-island_svg__b)">
        <mask
          id="christmas-island_svg__c"
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
          mask="url(#christmas-island_svg__c)"
        >
          <path fill="#5EAA22" d="M3 2h36v24H3V2Z" />
          <path fill="#4141DB" d="m3 2 36 24H3V2Z" />
          <path
            fill="#fff"
            d="m9.75 11-1.125.732.15-1.232L7.5 10l1.276-.5-.151-1.232L9.75 9l1.125-.732-.15 1.232L12 10l-1.276.5.151 1.232L9.75 11ZM7.5 17l-1.125.732.15-1.232L5.25 16l1.276-.5-.151-1.232L7.5 15l1.125-.732-.15 1.232 1.275.5-1.276.5.151 1.232L7.5 17Zm4.5 6-1.125.732.15-1.232L9.75 22l1.276-.5-.151-1.232L12 21l1.125-.732-.15 1.232 1.275.5-1.276.5.151 1.232L12 23Zm1.125-9.5-.563.366.076-.616L12 13l.638-.25-.075-.616.562.366.563-.366-.076.616.638.25-.638.25.075.616-.562-.366Z"
          />
          <path
            fill="#FECA00"
            d="M27.256 14.224c-.42-.39 3.364-1.306 3.756-2.488.52-1.029.173-1.862-1.791-2.594-1.965-.732-3.95-2.148-1.667-2.148 2.283 0 2.283.29 2.896 1.143.613.854 1.939 1.037 1.967 0 0-1.766.187-2.003-1.416-3.538-1.604-1.535 4.021.63 3.556 3.262-.465 2.632-1.025 1.783-.67 2.224.356.442 2.494-.93 2.227.897-.748 1.051-2.231 2.614-8.858 3.242ZM21 19c3.107 0 5.625-2.239 5.625-5S24.107 9 21 9s-5.625 2.239-5.625 5 2.518 5 5.625 5Z"
          />
          <path
            fill="#548650"
            d="M17.572 12.162c.638-.126 1.51 1.392 3.085.823 1.575-.57 1.904-1.657 2.652-1.26.748.399.846 1.357.348 1.839-.499.481-1.344.595-1.344 1.204s-.166 2.78-.49 2.15c-.969-.699-.377-1.812-1.571-2.15-1.194-.338-1.92-.327-2.8-.184-.88.143.592-.392.904-.9.636-.543-1.076-1.341-.784-1.522Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="christmas-island_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="christmas-island_svg__a"
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
          result="effect1_dropShadow_91_28866"
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
          in2="effect1_dropShadow_91_28866"
          result="effect2_dropShadow_91_28866"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28866"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgChristmasIsland;
