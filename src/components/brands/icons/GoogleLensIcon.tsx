import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleLensIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FBBC05"
      d="M32.001 11.001A5.015 5.015 0 0 1 37 16v4h5v-4a9.995 9.995 0 0 0-9.999-10H28v5.001h4Z"
    />
    <path
      fill="#EA4335"
      d="M11.001 15.999A5.015 5.015 0 0 1 16 11h4V6h-4a9.994 9.994 0 0 0-10 9.999V20h5.001v-4Z"
    />
    <path
      fill="#4285F4"
      d="M15.999 36.999A5.015 5.015 0 0 1 11 32v-4H6v4a9.994 9.994 0 0 0 9.999 10H20v-5.001h-4Z"
    />
    <path
      fill="#34A853"
      d="M36 39.998a3.998 3.998 0 1 0 0-7.996 3.998 3.998 0 0 0 0 7.996Z"
    />
    <path
      fill="#4285F4"
      d="M24 30.998a6.999 6.999 0 1 0 0-13.997 6.999 6.999 0 0 0 0 13.997Z"
    />
  </svg>
);

export default SvgGoogleLensIcon;
