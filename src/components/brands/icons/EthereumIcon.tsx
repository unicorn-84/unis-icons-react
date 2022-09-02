import * as React from 'react';
import { SVGProps } from 'react';

const SvgEthereumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle cx={24} cy={24} r={24} fill="#6481E7" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m13.515 24.976 10.766 6.365V7.113L13.515 24.976Z"
      clipRule="evenodd"
    />
    <path
      fill="#C1CCF5"
      fillRule="evenodd"
      d="M24.282 7.113v24.228l10.765-6.365L24.282 7.113Z"
      clipRule="evenodd"
    />
    <path
      fill="#8299EC"
      fillRule="evenodd"
      d="m24.281 20.084-10.766 4.892 10.766 6.364 10.766-6.363-10.766-4.893Z"
      clipRule="evenodd"
    />
    <path
      fill="#C1CCF5"
      fillRule="evenodd"
      d="m24.281 20.084-10.766 4.892 10.766 6.364V20.084Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.515 27.018 24.281 42.19v-8.811l-10.766-6.36Z"
      clipRule="evenodd"
    />
    <path
      fill="#C1CCF5"
      fillRule="evenodd"
      d="M24.282 33.379v8.811l10.772-15.172-10.773 6.36Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEthereumIcon;
