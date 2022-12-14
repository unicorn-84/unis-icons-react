import * as React from 'react';
import { SVGProps } from 'react';

const SvgTokelau = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#tokelau_svg__a)">
      <g clipPath="url(#tokelau_svg__b)">
        <mask
          id="tokelau_svg__c"
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
        <g mask="url(#tokelau_svg__c)">
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="tokelau_svg__d"
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
          <g fillRule="evenodd" clipRule="evenodd" mask="url(#tokelau_svg__d)">
            <path
              fill="#F7FCFF"
              d="m6.706 12.063-.996.548.387-.92-.847-.696h1.027l.43-.995.327.995h1.029l-.742.697.363.92-.978-.549Zm4.5-4-.996.548.387-.92-.847-.696h1.027l.43-.995.327.995h1.028l-.74.696.362.92-.978-.548Zm4.5 4-.996.548.387-.92-.847-.696h1.027l.43-.995.327.995h1.029l-.742.697.363.92-.978-.549Zm-4.5 4-.996.548.387-.92-.847-.696h1.027l.43-.995.327.995h1.028l-.74.697.362.92-.978-.549Z"
            />
            <path
              fill="#FECA00"
              d="M30.947 7.463C26.353 9.48 11.259 18.545 11.259 18.545h25.145c-.252-.05-.486-.091-.707-.13-1.846-.327-2.757-.488-4.75-4.018-2.232-3.952 0-6.934 0-6.934ZM10.443 19.965l-.344.76.344.835L36.04 22l.71-1.16-.71-.835-25.597-.04Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="tokelau_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="tokelau_svg__a"
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
          result="effect1_dropShadow_91_24743"
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
          in2="effect1_dropShadow_91_24743"
          result="effect2_dropShadow_91_24743"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24743"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgTokelau;
