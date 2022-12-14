import * as React from 'react';
import { SVGProps } from 'react';

const SvgPapuaNewGuinea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#papua-new-guinea_svg__a)">
      <g clipPath="url(#papua-new-guinea_svg__b)">
        <mask
          id="papua-new-guinea_svg__c"
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
        <g mask="url(#papua-new-guinea_svg__c)">
          <rect width={36} height={24} x={3} y={2} fill="#E11C1B" rx={2} />
          <path
            fill="#1D1D1D"
            fillRule="evenodd"
            d="m3 2 36 24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#EEEEF6"
            fillRule="evenodd"
            d="M10.969 20.269h1.498l.713-1.494.837 1.484 1.535.074-1.312 1.27.674 1.529-1.668-.852-1.54.86.581-1.486-1.318-1.385Zm-4.5-4h1.498l.713-1.494.837 1.484 1.535.074-1.312 1.27.674 1.529-1.668-.852-1.54.86.581-1.486L6.47 16.27Zm4.5-2h1.498l.713-1.494.837 1.484 1.535.074-1.312 1.27.674 1.529-1.668-.852-1.54.86.581-1.486-1.318-1.385Z"
            clipRule="evenodd"
          />
          <path
            fill="#EEEEF6"
            fillRule="evenodd"
            d="m13.925 18.564 1.03-.03.372-.945.417.94.948.08-.853.537.688.95-1.194-.397-1.035.41.546-.937-.919-.608Zm2.25-2 1.03-.03.372-.945.417.94.948.08-.853.537.688.95-1.194-.397-1.035.41.546-.937-.919-.608Z"
            clipRule="evenodd"
          />
          <path
            fill="#FBCD17"
            fillRule="evenodd"
            d="M26.72 4s-3.476.616-2.5 4.91h-.496s.04-.224-.436-.356c-.477-.13-.381-.082-.627 0s-1.743 0-1.743 0v.165l1.06.406s-.027.339.416.526c.443.188.764.278.764.278s.066.374-.35.374c-.414 0-2.082-.48-2.676.7-.593 1.181-1.382 2.048-1.382 2.048h.89l-.239.264h1.002l-.27.136s1.239-.012 1.335-.136c.097-.125 0 .337 0 .337s1.2-.487 1.267-.601l.56.342.16-.579.601.237.164-.551s1.7 2.529 2.991 2.384v-.42l1.177.42.15-.187s1.422.516 1.86.563l-.312-.563h.312l-.312-1.045h.312l-.625-.838.175-.226-.115-.298s2.29.648 2.186 1.68c-.103 1.031-1.123 1.448-1.123 1.448s-.978.266-1.861.209c0 0 .701.736 2.185.486 1.483-.25 1.975-1.528 1.975-1.528s.68 1.256.12 1.917c-.56.66-3.053 1.124-3.053 1.124s.902.47 1.757.35c.856-.121 2.186-.783 2.444-1.863s-.89-3.072-1.41-3.299l-.205-.69.467.166-.959-2.085.465.09-1.356-1.5.373-.102-1.874-1.197.56-.132s-1.385-.624-2.965.132l.015-.261-.416.062.025-.287.413-.556-.62-.212s.501-.67.426-.66c0 0-.558.142-.527.083 0 0 .282-.645.208-.628 0 0-.648.196-.552.098l.25-.394L26.718 4Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="papua-new-guinea_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="papua-new-guinea_svg__a"
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
          result="effect1_dropShadow_91_25903"
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
          in2="effect1_dropShadow_91_25903"
          result="effect2_dropShadow_91_25903"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25903"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgPapuaNewGuinea;
