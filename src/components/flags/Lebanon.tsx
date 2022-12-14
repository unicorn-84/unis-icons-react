import * as React from 'react';
import { SVGProps } from 'react';

const SvgLebanon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#lebanon_svg__a)">
      <g clipPath="url(#lebanon_svg__b)">
        <mask
          id="lebanon_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#lebanon_svg__c)">
          <path fill="#F50101" d="M39 2H3v6h36V2Zm0 18H3v6h36v-6Z" />
          <path fill="#F7FCFF" d="M3 8h36v12H3V8Z" />
          <path
            fill="#52AB0B"
            d="M27.204 14.513c.084.867-3.517-.36-3.517-.012 0 .347 3.857.957 3.851 1.734-.006.777-4.574-.222-3.55.128 1.025.35 3.224 1.186 2.974 1.708-.534 1.113-4.08-.773-4.374-.401-.476.6 2.616 1.999 2.59 2.132-.05.257-2.112-.402-2.59.13-.388-.097-.567-.56-.687-.622l-.76-8.723s.683 8.213-.19 8.45c-.873.235-3.298.954-3.369.595-.026-.134 2.92-1.362 2.444-1.962-.35-.442-3.906 1.125-4.132.218-1.01-.648 3.272-1.208 3.272-1.87 0-.662-3.918.784-3.45-.138.47-.922 3.606-1.252 3.665-1.38.107-.233-3.487.364-3.487 0 0-.687 2.15-.822 3.487-1.441.078-.707-3.24.695-3.487.129-.247-.566 4.242-2.033 4.132-2.147-.174-.18-3.791.633-3.195.206 1.158-.83 3.418-1.958 3.938-2.26 0 0 .063-.113.13-.074l.14-.081s0 .71-.01.156c-.011-.554 5.298 1.87 5.358 2.486.07.718-3.28-.542-3.201.164.68.376 2.618 1.101 3.419 1.42.363.145-2.675-.306-2.611-.084.163.564 3.123.634 3.21 1.54Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="lebanon_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="lebanon_svg__a"
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
          result="effect1_dropShadow_91_26767"
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
          in2="effect1_dropShadow_91_26767"
          result="effect2_dropShadow_91_26767"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26767"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLebanon;
