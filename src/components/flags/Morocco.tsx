import * as React from 'react';
import { SVGProps } from 'react';

const SvgMorocco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#morocco_svg__a)">
      <g clipPath="url(#morocco_svg__b)">
        <mask
          id="morocco_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#morocco_svg__c)">
          <path
            fill="#C51918"
            d="M3 2h36v22a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2Z"
          />
          <path fill="#E31D1C" d="M3 2h36v24H3V2Z" />
          <path
            fill="#579D20"
            d="M28.293 21.626 21.187 4.701h-.308L14.02 21.626l7.123-3.805 7.15 3.805ZM20.4 10.222l.761-2.638.79 2.714 2.272 5.656 1.333 2.739-2.878-1.803-1.538-.818-1.512.808-2.812 1.813 1.3-2.795 2.284-5.676Z"
          />
          <path
            fill="#579D20"
            d="m17.245 15.473 3.933 2.324 3.67-2.324 6.97-5.237H10.185l7.062 5.237Zm.082-1.999-2.675-1.455H27.28l-2.297 1.293-3.82 2.577-3.835-2.415Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="morocco_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="morocco_svg__a"
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
          result="effect1_dropShadow_91_26636"
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
          in2="effect1_dropShadow_91_26636"
          result="effect2_dropShadow_91_26636"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26636"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMorocco;
