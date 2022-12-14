import * as React from 'react';
import { SVGProps } from 'react';

const SvgUzbekistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#uzbekistan_svg__a)">
      <g clipPath="url(#uzbekistan_svg__b)">
        <mask
          id="uzbekistan_svg__c"
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
        <g mask="url(#uzbekistan_svg__c)">
          <path
            fill="#14DC5A"
            fillRule="evenodd"
            d="M3 18h36v8H3v-8Z"
            clipRule="evenodd"
          />
          <path
            fill="#0099B5"
            fillRule="evenodd"
            d="M3 2h36v10H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#F7FCFF"
            stroke="#C51918"
            d="M.75 11.5h-.5v7h41.5v-7h-41Z"
          />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="m19.359 5.007-.757.374.216-.76-.725-.559h.947l.318-.72.372.72h.808l-.635.559.306.76-.85-.374Zm-4.06 2.29.758-.374.85.374-.306-.76.635-.558h-.808l-.372-.72-.318.72h-.947l.725.558-.216.76Zm-2.818 1.664-.757.374.216-.76-.725-.558h.947l.318-.72.372.72h.808l-.634.558.305.76-.85-.374Zm3.576 0-.757.374.216-.76-.725-.558h.947l.318-.72.372.72h.808l-.635.558.306.76-.85-.374Zm3.352 0-.757.374.216-.76-.725-.558h.947l.318-.72.373.72h.807l-.634.558.305.76-.85-.374Zm-.757-1.664.757-.374.85.374-.305-.76.634-.558h-.807l-.373-.72-.318.72h-.947l.725.558-.216.76Zm3.374 2.038.758-.374.85.374-.306-.76.635-.558h-.808l-.373-.72-.317.72h-.948l.726.558-.216.76Zm.758-2.412-.758.374.217-.76-.726-.558h.948l.317-.72.373.72h.808l-.635.558.305.76-.85-.374Zm-.808-1.542.757-.374.85.374-.305-.76.634-.559h-.807l-.373-.72-.318.72h-.947l.725.559-.216.76Zm4.217 3.58-.758.374.217-.76-.726-.558h.948l.318-.72.372.72h.808l-.635.558.305.76-.85-.374Zm-.758-1.664.758-.374.85.374-.306-.76.635-.558h-.808l-.372-.72-.318.72h-.948l.726.558-.217.76Zm.707-2.29-.757.374.216-.76-.725-.559h.947l.318-.72.373.72h.807l-.634.559.305.76-.85-.374ZM9.621 10.24s-2.718-.655-2.667-3.079C7.005 4.74 9.75 4.11 9.75 4.11c-1.122-.377-4.438.13-4.5 3.029-.06 2.899 3.325 3.47 4.37 3.103Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="uzbekistan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="uzbekistan_svg__a"
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
          result="effect1_dropShadow_91_24212"
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
          in2="effect1_dropShadow_91_24212"
          result="effect2_dropShadow_91_24212"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24212"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgUzbekistan;
