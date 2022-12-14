import * as React from 'react';
import { SVGProps } from 'react';

const SvgSintEustatius = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#sint-eustatius_svg__a)">
      <g clipPath="url(#sint-eustatius_svg__b)">
        <mask
          id="sint-eustatius_svg__c"
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
        <g mask="url(#sint-eustatius_svg__c)">
          <path
            fill="#00268D"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#00268D"
            stroke="#E31D1C"
            strokeWidth={2}
            d="M4 3h34v22H4V3Z"
          />
          <path fill="#E31D1C" d="M19.875 2h2.25v24h-2.25z" />
          <path fill="#E31D1C" d="M3 15v-2h36v2z" />
          <path
            fill="#fff"
            stroke="#E31D1C"
            strokeWidth={2}
            d="M21.406 8.086 21 7.906l-.406.18-11.25 5L7.288 14l2.056.914 11.25 5 .406.18.406-.18 11.25-5L34.712 14l-2.056-.914-11.25-5Z"
          />
          <mask
            id="sint-eustatius_svg__d"
            width={34}
            height={16}
            x={4}
            y={6}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth={2}
              d="M21.406 8.086 21 7.906l-.406.18-11.25 5L7.288 14l2.056.914 11.25 5 .406.18.406-.18 11.25-5L34.712 14l-2.056-.914-11.25-5Z"
            />
          </mask>
          <g mask="url(#sint-eustatius_svg__d)">
            <path
              fill="#059334"
              d="M16.06 18h15.065l-1.593-1.276s-3.185-2.524-3.39-2.64c-.205-.115-.544-.165-.929.203-.385.367-.606-.202-.927-.202-.321 0-.457 0-.922.471l-2.142 2.168h-2.463s-.416-.279-.653-.18c-.237.1-1.57-1.099-2.046-1.188-.475-.09-.788.325-.788.655s-.223-.303-.678-.117c-.455.185-.308.65-.308.65S15.757 18 16.06 18Z"
            />
            <path
              fill="#FEDA00"
              fillRule="evenodd"
              d="M20.443 13.301 19.4 14l.382-1.154-1.033-.707h1.287L20.443 11l.43 1.14h1.252l-1.024.706.39 1.154-1.048-.699Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="sint-eustatius_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="sint-eustatius_svg__a"
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
          result="effect1_dropShadow_91_29383"
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
          in2="effect1_dropShadow_91_29383"
          result="effect2_dropShadow_91_29383"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29383"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSintEustatius;
