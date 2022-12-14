import * as React from 'react';
import { SVGProps } from 'react';

const SvgCuracao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#curacao_svg__a)">
      <g clipPath="url(#curacao_svg__b)">
        <mask
          id="curacao_svg__c"
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
        <g mask="url(#curacao_svg__c)">
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="curacao_svg__d"
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
          <g fillRule="evenodd" clipRule="evenodd" mask="url(#curacao_svg__d)">
            <path
              fill="#F7FCFF"
              d="M7.786 8.15 5.55 9.198 6.63 7.33 5.25 5.963l1.714-.056L7.786 4l.628 1.907 2.005.056-1.444 1.368.916 1.868-2.105-1.05Zm7.985 4.927-2.761 1.028 1.083-2.577-2.4-1.729h2.876l1.202-2.787.918 2.787h2.881l-2.047 1.73 1.016 2.576-2.768-1.028Z"
            />
            <path fill="#F9E813" d="M3 16v4h36v-4H3Z" />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="curacao_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="curacao_svg__a"
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
          result="effect1_dropShadow_91_28882"
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
          in2="effect1_dropShadow_91_28882"
          result="effect2_dropShadow_91_28882"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28882"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCuracao;
