import * as React from 'react';
import { SVGProps } from 'react';

const SvgDirectDebitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#231F20" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24.813 20.863v12.868s-7.334-1.347-7.334-6.46c0-4.082 5.43-5.88 7.334-6.408Zm0-.241C20.405 20.298 10.411 22.4 10.411 27c0 3 5.292 7.385 13.91 7.5.34 0 10.132-.384 9.982-11.078-.127-8.98-6.734-10.552-8.848-10.827v-.547C33.878 12.591 40.5 17.747 40.5 24c0 6.616-7.409 12-16.52 12C14.872 36 7.5 30.616 7.5 23.999 7.5 17.384 14.871 12 23.98 12c.28 0 .558.006.833.015v8.607Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDirectDebitIcon;
