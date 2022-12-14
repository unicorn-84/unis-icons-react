import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaboVerde = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#cabo-verde_svg__a)">
      <g clipPath="url(#cabo-verde_svg__b)">
        <mask
          id="cabo-verde_svg__c"
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
        <g mask="url(#cabo-verde_svg__c)">
          <path
            fill="#4141DB"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="cabo-verde_svg__d"
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
          <g mask="url(#cabo-verde_svg__d)">
            <path
              fill="#F90000"
              stroke="#F7FCFF"
              strokeWidth={2}
              d="M3 15H2v4h38v-4H3Z"
            />
            <g filter="url(#cabo-verde_svg__e)">
              <path
                fill="#FFDE00"
                fillRule="evenodd"
                d="m14.02 12.26.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Zm3.375 1.6.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Zm3.517 1.89-.817.51.276-.906-.725-.574h.947l.318-.74.372.74h.808l-.635.574.246.905-.79-.508Zm-.817 4.51.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Zm-1.883 1.89-.817.51.276-.906-.725-.574h.947l.318-.74.372.74h.808l-.635.574.246.905-.79-.508Zm-4.192 2.11.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Zm-2.558-2.11-.817.51.276-.906-.725-.574h.947l.318-.74.372.74h.808l-.635.574.246.905-.79-.508Zm-3.517-1.89.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Zm.817-4.51-.817.51.276-.906-.725-.574h.947l.318-.74.372.74h.808l-.635.574.246.905-.79-.508Zm1.883-1.89.817-.51.79.51-.246-.906.635-.574h-.808l-.372-.74-.318.74h-.947l.725.574-.276.905Z"
                clipRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="cabo-verde_svg__a"
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
          result="effect1_dropShadow_91_28891"
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
          in2="effect1_dropShadow_91_28891"
          result="effect2_dropShadow_91_28891"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28891"
          result="shape"
        />
      </filter>
      <filter
        id="cabo-verde_svg__e"
        width={22.595}
        height={22.218}
        x={3.496}
        y={6.041}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_28891"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_91_28891"
          result="shape"
        />
      </filter>
      <clipPath id="cabo-verde_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCaboVerde;
