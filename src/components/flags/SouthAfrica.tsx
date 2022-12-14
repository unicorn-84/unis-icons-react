import * as React from 'react';
import { SVGProps } from 'react';

const SvgSouthAfrica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#south-africa_svg__a)">
      <g clipPath="url(#south-africa_svg__b)">
        <mask
          id="south-africa_svg__c"
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
        <g mask="url(#south-africa_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v8h36V2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 18v8h36v-8H3Z"
            clipRule="evenodd"
          />
          <mask
            id="south-africa_svg__d"
            width={40}
            height={36}
            x={1}
            y={-4}
            fill="#000"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" d="M1-4h40v36H1z" />
            <path
              fillRule="evenodd"
              d="M20.357 12 3 0v28l17.357-12H39v-4H20.357Z"
              clipRule="evenodd"
            />
          </mask>
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M20.357 12 3 0v28l17.357-12H39v-4H20.357Z"
            clipRule="evenodd"
          />
          <path
            fill="#F7FCFF"
            d="m3 0 1.137-1.645L1-3.815V0h2Zm17.357 12-1.137 1.645.513.355h.624v-2ZM3 28H1v3.814l3.137-2.169L3 28Zm17.357-12v-2h-.624l-.513.355L20.357 16ZM39 16v2h2v-2h-2Zm0-4h2v-2h-2v2ZM1.863 1.645l17.357 12 2.274-3.29-17.357-12-2.274 3.29ZM5 28V0H1v28h4Zm14.22-13.645-17.357 12 2.274 3.29 17.357-12-2.274-3.29ZM39 14H20.357v4H39v-4Zm-2-2v4h4v-4h-4Zm-16.643 2H39v-4H20.357v4Z"
            mask="url(#south-africa_svg__d)"
          />
          <path
            fill="#272727"
            stroke="#FECA00"
            strokeWidth={2}
            d="M3.555 7.168 2 6.131V21.87l1.555-1.037 9-6L13.803 14l-1.248-.832-9-6Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="south-africa_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="south-africa_svg__a"
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
          result="effect1_dropShadow_91_23871"
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
          in2="effect1_dropShadow_91_23871"
          result="effect2_dropShadow_91_23871"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_23871"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSouthAfrica;
