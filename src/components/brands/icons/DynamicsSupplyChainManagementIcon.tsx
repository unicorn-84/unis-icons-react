import * as React from 'react';
import { SVGProps } from 'react';

const SvgDynamicsSupplyChainManagementIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#145399"
      d="M13.651 34.108A7.648 7.648 0 0 1 6 26.457V13.865c0-4.215 3.436-7.624 7.651-7.624s7.651 3.41 7.651 7.624v12.59a7.648 7.648 0 0 1-7.651 7.652Z"
    />
    <path
      fill="#8DD6ED"
      d="M34.349 41.758c-4.215 0-7.651-3.436-7.651-7.65V21.516c0-4.215 3.436-7.651 7.651-7.651S42 17.302 42 21.516v12.591c-.027 4.215-3.436 7.651-7.651 7.651Z"
    />
    <g filter="url(#dynamics-supply-chain-management-icon_svg__a)">
      <path
        fill="#16ADE1"
        d="M13.06 6.242s4.054 2.147 4.054 5.288v17.557c0 3.33.027 7.114 1.852 9.853.08.134.215.295.376.456 1.181 1.235 2.658 1.852 4.322 2.148a9.96 9.96 0 0 0 1.799.16h8.08s-3.06-1.932-3.06-7.033c0-4.08.134-13.369.215-18.872.054-2.765-.671-5.423-2.604-7.249 0 0-1.745-2.013-4.725-2.281H13.06v-.027Z"
      />
    </g>
    <defs>
      <filter
        id="dynamics-supply-chain-management-icon_svg__a"
        width={24.483}
        height={39.463}
        x={9.06}
        y={4.242}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2491" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2491"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDynamicsSupplyChainManagementIcon;
