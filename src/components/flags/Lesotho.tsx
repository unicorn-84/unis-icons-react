import * as React from 'react';
import { SVGProps } from 'react';

const SvgLesotho = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#lesotho_svg__a)">
      <g clipPath="url(#lesotho_svg__b)">
        <mask
          id="lesotho_svg__c"
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
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#lesotho_svg__c)">
          <path fill="#55BA07" d="M3 18h36v8H3v-8Z" />
          <path fill="#F7FCFF" d="M3 10h36v8H3v-8Z" />
          <path fill="#3D58DB" d="M3 2h36v8H3V2Z" />
          <path
            fill="#1D1D1D"
            d="M20.156 10.24c-.588.14-.898.502-.898 1.141 0 .73.403 1.416.898 1.77v-2.91Zm1.407 2.891a2.258 2.258 0 0 0 .868-1.748c0-.62-.306-.98-.869-1.13v2.878Zm-.072-3.403c.933.177 1.611.736 1.611 1.65 0 .658-.352 1.458-.899 2.008l2.738 2.387.675-.198 1.009 1.36S24.075 18 20.925 18c-3.15 0-5.55-1.065-5.55-1.065l.859-1.162.693.202 2.54-2.548c-.57-.55-.94-1.374-.94-2.05 0-.945.725-1.511 1.71-1.666a.703.703 0 0 1 1.254.017Zm-4.99 6.569-.284.352h.555l-.27-.352Zm.326.491-.49.088.49.152v-.24Zm.25-.508.25.52.624-.15-.124-.21-.75-.16Zm1.354 1.038-.914-.16-.105-.156.69-.134.33.45Zm.054-.745.284.455.625-.17-.174-.203-.735-.082Zm.512.836-.112-.188.692-.164.398.432-.978-.08Zm1.292-.312.89-.21-.109-.18h-1.157l.376.39Zm.32.4-.142-.195.856-.249.454.444h-1.169Zm1.082-.776.274.298.741-.228-.093-.156-.922.086Zm1.61.62-.997.098-.147-.22.754-.22.39.342Zm-.064-.764.28.305.668-.305-.185-.092-.763.092Zm.579.682-.121-.165.636-.34.324.34-.84.165Zm.632-.95.404.344.393-.343-.124-.14-.673.14Zm.64.461.33-.29.237.29-.566.162v-.162Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="lesotho_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="lesotho_svg__a"
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
          result="effect1_dropShadow_91_26683"
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
          in2="effect1_dropShadow_91_26683"
          result="effect2_dropShadow_91_26683"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26683"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLesotho;
