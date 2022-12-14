import * as React from 'react';
import { SVGProps } from 'react';

const SvgRubygemsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#D34231"
      d="m17.7 17.84.02.02-.02-.04h12.68v.02l4.44 4.44-6.34 6.34-4.44 4.42-10.78-10.76 4.44-4.44Z"
    />
    <path
      fill="#D34231"
      fillRule="evenodd"
      d="M8.3 15 24 6l15.7 9v18L24 42 8.3 33V15ZM24 38.6l12.7-7.32v-14.6L24 9.36l-12.7 7.32v14.6L24 38.6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRubygemsIcon;
