import * as React from 'react';
import { SVGProps } from 'react';

const SvgAndroidAutoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#03A9F4"
      fillRule="evenodd"
      d="M8.298 36.638a2.297 2.297 0 0 1-1.992-3.445L20.86 7.917a2.296 2.296 0 0 1 1.991-1.151c.852 0 1.595.463 1.992 1.15l14.553 25.277a2.297 2.297 0 0 1-1.991 3.445H8.297Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#android-auto-icon_svg__a)"
      fillRule="evenodd"
      d="M22.851 17.49v19.148H42L22.851 17.49Z"
      clipRule="evenodd"
    />
    <path
      fill="#039BE5"
      fillRule="evenodd"
      d="M20.86 7.917 6.306 33.193a2.297 2.297 0 0 0 1.991 3.445h14.554V6.766c-.852 0-1.595.463-1.991 1.15Z"
      clipRule="evenodd"
    />
    <path
      fill="#F1F1F1"
      fillRule="evenodd"
      d="m22.851 17.49 13.021 22.978-.766.766-12.255-4.596-12.255 4.596-.766-.766 13.02-22.979Z"
      clipRule="evenodd"
    />
    <path
      fill="#E1E1E1"
      fillRule="evenodd"
      d="m22.851 17.49 13.021 22.978-.766.766-12.255-4.596"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="android-auto-icon_svg__a"
        x1={18.74}
        x2={38.974}
        y1={24.729}
        y2={36.22}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A237E" stopOpacity={0.2} />
        <stop offset={1} stopColor="#1A237E" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAndroidAutoIcon;
