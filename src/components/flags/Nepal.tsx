import * as React from 'react';
import { SVGProps } from 'react';

const SvgNepal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#nepal_svg__a)">
      <g clipPath="url(#nepal_svg__b)">
        <path fill="#fff" d="M3 2h36v24H3z" />
        <path
          fill="#C51918"
          stroke="#4857A1"
          d="M16.135 14.342 26.595 25.5H3.5V2.798L25.573 13.5H15.346l.79.842Z"
        />
        <mask
          id="nepal_svg__c"
          width={25}
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
            stroke="#fff"
            d="M16.135 14.342 26.595 25.5H3.5V2.798L25.573 13.5H15.346l.79.842Z"
          />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#nepal_svg__c)">
          <path
            fill="#F7FCFF"
            d="M9.558 22.01 8.18 23.6l-.064-2.006-2.166.566 1.275-1.657-2.127-.673 2.127-.674-1.275-1.657 2.166.567.064-2.007 1.378 1.59 1.379-1.59.063 2.006 2.167-.566-1.276 1.657 2.128.674-2.128.674 1.276 1.656L11 21.594l-.063 2.006-1.379-1.59Zm-.033-11.871-.72.83-.033-1.048-1.132.296.666-.865L7.196 9l1.11-.352-.666-.865 1.132.296.033-1.048.72.83.72-.83.033 1.048 1.131-.296-.666.865L11.854 9l-1.11.352.665.865-1.131-.296-.033 1.048-.72-.83Z"
          />
          <path
            fill="#F9FAFA"
            d="M9.374 9.894c2.505.009 3.84-1.254 3.84-1.254.264 1.441-1.775 2.4-3.815 2.4s-3.276-1.307-4.037-2.4c0 0 1.508 1.245 4.012 1.254Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="nepal_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="nepal_svg__a"
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
          result="effect1_dropShadow_91_26110"
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
          in2="effect1_dropShadow_91_26110"
          result="effect2_dropShadow_91_26110"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26110"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgNepal;
