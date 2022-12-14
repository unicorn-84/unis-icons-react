import * as React from 'react';
import { SVGProps } from 'react';

const SvgTwitchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#6441A4"
      fillRule="evenodd"
      d="M8.699 13.565 10.786 8H39.3v19.48l-8.347 8.344h-6.26L20.525 40h-4.177v-4.176H8.7V13.565Zm27.82-2.784H13.567v20.175h6.263v4.17l4.17-4.17h7.65l4.87-4.87V10.78Z"
      clipRule="evenodd"
    />
    <path
      fill="#6441A4"
      fillRule="evenodd"
      d="M31.65 24.696h-2.782V16.35h2.782v8.347Zm-7.65 0h-2.782V16.35H24v8.347Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgTwitchIcon;
