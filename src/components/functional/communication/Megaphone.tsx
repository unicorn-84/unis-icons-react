import * as React from 'react';
import { SVGProps } from 'react';

const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 10v15.462a.989.989 0 0 0 .45.838l1.375.912a1 1 0 0 0 1.525-.587L24 20"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 20a5 5 0 1 0 0-10h-5s-6.813 0-13.363-5.487A1 1 0 0 0 4 5.275v19.45a1 1 0 0 0 1.638.762C12.188 20 19 20 19 20h5Z"
    />
  </svg>
);

export default SvgMegaphone;
