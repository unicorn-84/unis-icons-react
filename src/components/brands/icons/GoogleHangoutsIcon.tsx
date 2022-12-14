import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleHangoutsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={18} fill="#0F9D58" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M23.995 12.429c6.388 0 11.576 5.179 11.576 11.566 0 5.92-4.547 11.87-11.575 15.434v-4.5c-6.052 0-11.567-4.882-11.567-10.934 0-6.387 5.179-11.566 11.566-11.566Zm-6.424 12.857v-5.143h5.143v5.143c0 1.543-1.243 2.571-2.571 2.571v-2.571H17.57Zm7.715 0v-5.143h5.143v5.143c0 1.543-1.244 2.571-2.572 2.571v-2.571h-2.571Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgGoogleHangoutsIcon;
