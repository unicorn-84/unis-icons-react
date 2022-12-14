import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlgeria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#algeria_svg__a)">
      <g fillRule="evenodd" clipPath="url(#algeria_svg__b)" clipRule="evenodd">
        <path fill="#F7FCFF" d="M21 2h18v24H21V2Z" />
        <path fill="#36A400" d="M3 2h18v24H3V2Z" />
        <path
          fill="red"
          d="M23.015 8.795c1.712 0 3.277.562 4.473 1.49C25.973 8.583 23.63 7.492 21 7.492c-4.569 0-8.272 3.292-8.272 7.353 0 4.06 3.704 7.353 8.272 7.353 2.63 0 4.973-1.091 6.488-2.792-1.196.928-2.76 1.49-4.473 1.49-3.76 0-6.808-2.71-6.808-6.051 0-3.342 3.048-6.051 6.808-6.051Zm3.172 2.748-1.915 1.93-2.75-.674 1.524 2.12-1.525 2.258 2.886-.924 1.577 2.189v-2.54l2.578-.982-2.578-.821.203-2.556Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="algeria_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="algeria_svg__a"
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
          result="effect1_dropShadow_91_28657"
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
          in2="effect1_dropShadow_91_28657"
          result="effect2_dropShadow_91_28657"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28657"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAlgeria;
