import * as React from 'react';
import { SVGProps } from 'react';

const SvgGmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M8.455 37.132h5.727v-13.91L6 17.087v17.591a2.454 2.454 0 0 0 2.455 2.455Z"
    />
    <path
      fill="#34A853"
      d="M33.818 37.132h5.727A2.454 2.454 0 0 0 42 34.677v-17.59l-8.182 6.136v13.909Z"
    />
    <path
      fill="#FBBC04"
      d="M33.818 12.586v10.636L42 17.087v-3.273c0-3.033-3.463-4.765-5.891-2.945l-2.29 1.718Z"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M14.182 23.223V12.585L24 19.95l9.818-7.364v10.636L24 30.587l-9.818-7.363Z"
      clipRule="evenodd"
    />
    <path
      fill="#C5221F"
      d="M6 13.813v3.273l8.182 6.137V12.585l-2.291-1.718C9.463 9.048 6 10.78 6 13.813Z"
    />
  </svg>
);

export default SvgGmailIcon;
