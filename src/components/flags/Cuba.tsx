import * as React from 'react';
import { SVGProps } from 'react';

const SvgCuba = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#cuba_svg__a)">
      <g clipPath="url(#cuba_svg__b)">
        <mask
          id="cuba_svg__c"
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
        <g mask="url(#cuba_svg__c)">
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="cuba_svg__d"
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
          <g mask="url(#cuba_svg__d)">
            <path
              fill="#3D58DB"
              stroke="#F7FCFF"
              strokeWidth={4}
              d="M3 10H1v8h40v-8H3Z"
            />
          </g>
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24l20.25-12L3 2Z"
            clipRule="evenodd"
          />
          <mask
            id="cuba_svg__e"
            width={21}
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
              d="M3 2v24l20.25-12L3 2Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#cuba_svg__e)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m10.524 16.217-4.131 1.938 2.011-3.894-2.563-2.08 3.164-.104 1.519-3.52 1.159 3.52h3.158l-2.105 2.184 1.675 3.894-3.887-1.938Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="cuba_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="cuba_svg__a"
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
          result="effect1_dropShadow_91_28909"
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
          in2="effect1_dropShadow_91_28909"
          result="effect2_dropShadow_91_28909"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28909"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCuba;
