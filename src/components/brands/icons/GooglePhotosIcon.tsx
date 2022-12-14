import * as React from 'react';
import { SVGProps } from 'react';

const SvgGooglePhotosIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FBBB05"
      d="M15.001 14.177c4.968 0 9 4.032 9 9V24H6.824A.825.825 0 0 1 6 23.177c0-4.968 4.032-9 9-9Z"
    />
    <path
      fill="#E94335"
      d="M33.824 15c0 4.968-4.032 9-9 9H24V6.823c0-.453.37-.823.823-.823 4.968 0 9 4.032 9 9Z"
    />
    <path
      fill="#4285F4"
      d="M33.001 33.823c-4.968 0-9-4.032-9-9V24h17.177c.453 0 .823.37.823.823 0 4.968-4.032 9-9 9Z"
    />
    <path
      fill="#0F9D58"
      d="M14.178 33c0-4.968 4.032-9 9-9h.823v17.177c0 .453-.37.823-.823.823-4.968 0-9-4.032-9-9Z"
    />
  </svg>
);

export default SvgGooglePhotosIcon;
