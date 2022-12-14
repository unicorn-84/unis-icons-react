import * as React from 'react';
import { SVGProps } from 'react';

const SvgLibya = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#libya_svg__a)">
      <g clipPath="url(#libya_svg__b)">
        <mask
          id="libya_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#libya_svg__c)">
          <path fill="#55BA07" d="M3 20h36v6H3v-6Z" />
          <path fill="#1D1D1D" d="M3 8h36v12H3V8Z" />
          <path fill="#E11C1B" d="M3 2h36v6H3V2Z" />
          <path
            fill="#fff"
            d="M20.772 17.066c-2.016-.37-2.539-1.308-2.517-2.755 0-1.53.906-3.08 2.497-3.249 1.59-.17 2.893.358 3.575 1.094-.57-1.997-2.463-2.216-3.915-2.216-2.187-.017-4.43 1.46-4.43 4.239 0 2.42 1.977 4.24 4.493 4.285 3.145 0 3.638-1.93 3.728-2.588-.182.116-.351.255-.525.397-.632.517-1.324 1.083-2.906.793Zm5.024-3.775-1.49.417 1.668.58-.232 1.554 1.13-1.07 1.64.3-1.108-1.151.982-1.177-1.37.257-.968-.972-.252 1.262Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="libya_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="libya_svg__a"
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
          result="effect1_dropShadow_91_26649"
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
          in2="effect1_dropShadow_91_26649"
          result="effect2_dropShadow_91_26649"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26649"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLibya;
