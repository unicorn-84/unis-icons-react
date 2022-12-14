import * as React from 'react';
import { SVGProps } from 'react';

const SvgEgypt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#egypt_svg__a)">
      <g clipPath="url(#egypt_svg__b)">
        <mask
          id="egypt_svg__c"
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
        <g mask="url(#egypt_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="egypt_svg__d"
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
          <g mask="url(#egypt_svg__d)">
            <path
              fill="#BF2714"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#272727"
              fillRule="evenodd"
              d="M3 18v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#C09302"
              d="m16.793 12.22 1.124.046-.282 5.47-1.124-.046.282-5.47Zm1.174.34 1.123.056-.282 4.436-1.123-.057.282-4.435Z"
            />
            <path
              fill="#C09302"
              d="m19.142 12.892 1.121.082-.282 3.056-1.121-.082.282-3.056Zm6.065-.672-1.124.046.282 5.47 1.124-.046-.282-5.47Zm-1.174.34-1.123.056.282 4.436 1.123-.057-.282-4.435Z"
            />
            <path
              fill="#C09302"
              d="m22.858 12.892-1.121.082.282 3.056 1.121-.082-.282-3.056Zm-1.888 4.435-1.096-.224.464-1.8 1.096.223-.464 1.8Z"
            />
            <path
              fill="#C09302"
              d="m21.81 17.327 1.096-.224-.464-1.8-1.096.223.464 1.8Z"
            />
            <path
              fill="#C09302"
              d="M21.531 17.31h-1.125v-1.768h1.125v1.768Zm-2.067-4.397 1.125.025-.066 2.38-1.125-.024.066-2.38Zm1.956 0 1.125.025-.065 2.38-1.125-.024.066-2.38Z"
            />
            <path
              fill="#C09302"
              d="m18.005 17.923.292-.966c1.194.285 2.11.427 2.735.427s1.542-.142 2.735-.427l.293.966c-1.281.306-2.285.46-3.028.46-.742 0-1.746-.154-3.027-.46Zm-1.188-5.7c-.075-.66.36-1.108 1.098-1.051.242.019.514.082.877.192l.209.064c.498.158.634.199.662.204-.11-.022.215-.545.29-.633.008.056-.03.048-.12.032l-1.014-.18.722-.66c.253-.23.589-.344.973-.344.04 0 .076-.002.198-.008l.192-.009c.702-.02 1.205.156 1.205.798 0 .23.033.599.087.879.018.094.053.182-.05.22.004-.033.25-.119.632-.26l.046-.018c1.11-.412 1.24-.45 1.599-.257.238.129.466.36.72.707l-.941.547c-.164-.223-.295-.358-.357-.396.141.088-.335.228-.588.322l-.045.017c-.865.321-.979.36-1.226.36-.673 0-.915-.613-.98-1.49-.208.607-.828 1.373-1.338 1.373-.224 0-.116.032-1.044-.261l-.194-.06a3.339 3.339 0 0 0-.611-.143.472.472 0 0 1 .045-.04l-1.047.095Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="egypt_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="egypt_svg__a"
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
          result="effect1_dropShadow_91_28566"
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
          in2="effect1_dropShadow_91_28566"
          result="effect2_dropShadow_91_28566"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28566"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgEgypt;
