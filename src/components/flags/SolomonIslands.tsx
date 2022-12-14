import * as React from 'react';
import { SVGProps } from 'react';

const SvgSolomonIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#solomon-islands_svg__a)">
      <g clipPath="url(#solomon-islands_svg__b)">
        <mask
          id="solomon-islands_svg__c"
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
        <g mask="url(#solomon-islands_svg__c)">
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="solomon-islands_svg__d"
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
          <g mask="url(#solomon-islands_svg__d)">
            <path
              fill="#579D20"
              fillRule="evenodd"
              d="M3 26h36V2L3 26Z"
              clipRule="evenodd"
            />
            <path
              fill="#FECA00"
              d="M2.12 26.745.092 24.25 40.885.046l2.03 2.496L2.12 26.746Z"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m7.11 8.546 1.534-.945 1.607.85-.563-1.524 1.123-1.091H9.29l-.645-1.602L8 5.836l-1.525.056L7.6 6.927l-.49 1.62Zm6.366 0 1.534-.945 1.606.85-.563-1.524 1.124-1.091h-1.522l-.645-1.602-.646 1.602-1.524.056 1.126 1.035-.49 1.62Z"
              clipRule="evenodd"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m10.48 11.455 1.533-.946 1.607.85-.563-1.524 1.124-1.091h-1.523l-.645-1.602-.645 1.602-1.525.056 1.126 1.035-.49 1.62ZM8.643 13.6l-1.534.946.49-1.62-1.126-1.035L8 11.836l.645-1.602.645 1.602h1.523l-1.124 1.09.563 1.525-1.607-.85Zm6.366 0-1.534.946.49-1.62-1.126-1.035 1.524-.056.646-1.602.645 1.602h1.522l-1.124 1.09.563 1.525-1.606-.85Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="solomon-islands_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="solomon-islands_svg__a"
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
          result="effect1_dropShadow_91_25263"
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
          in2="effect1_dropShadow_91_25263"
          result="effect2_dropShadow_91_25263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25263"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSolomonIslands;
