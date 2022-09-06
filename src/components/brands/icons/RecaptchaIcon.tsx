import * as React from 'react';
import { SVGProps } from 'react';

const SvgRecaptchaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1C3AA9"
      d="M42 23.975c0-.259-.007-.515-.018-.77V8.636l-4.028 4.027c-3.296-4.035-8.31-6.612-13.927-6.612-5.845 0-11.037 2.79-14.32 7.11l6.602 6.672a8.746 8.746 0 0 1 2.674-3c1.152-.9 2.785-1.635 5.044-1.635.273 0 .484.031.638.092a8.703 8.703 0 0 1 6.654 4.007l-4.673 4.673c5.918-.024 12.605-.037 15.353.003"
    />
    <path
      fill="#4285F4"
      d="M23.922 6.054c-.258 0-.515.007-.77.018H8.584l4.028 4.028C8.577 13.396 6 18.41 6 24.026c0 5.845 2.79 11.038 7.11 14.32l6.671-6.6a8.745 8.745 0 0 1-3-2.675c-.9-1.152-1.635-2.785-1.635-5.044 0-.273.032-.484.092-.639a8.703 8.703 0 0 1 4.008-6.653l4.672 4.673c-.023-5.919-.037-12.605.003-15.354"
    />
    <path
      fill="#ABABAB"
      d="M6 24.025c.002.258.007.515.02.77v14.568l4.026-4.027c3.297 4.035 8.31 6.612 13.927 6.612 5.845 0 11.038-2.79 14.32-7.11l-6.601-6.672a8.748 8.748 0 0 1-2.674 3c-1.153.9-2.786 1.635-5.044 1.635-.273 0-.484-.032-.639-.092a8.703 8.703 0 0 1-6.653-4.007l4.673-4.673c-5.919.023-12.605.037-15.354-.003"
    />
  </svg>
);

export default SvgRecaptchaIcon;
