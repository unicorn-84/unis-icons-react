import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.912 11.875a3.012 3.012 0 0 1 4.2-.037C21.326 13 21.3 14.975 20.1 16.175l-8.375 8.113a1.012 1.012 0 0 0-.012 1.424L15.3 29.3a1.013 1.013 0 0 0 1.412.012l8.3-8.15c3.9-3.9 4.013-10.25.15-14.174a10 10 0 0 0-14.2-.063L2.7 15.288a1 1 0 0 0 0 1.412l3.587 3.588a1.013 1.013 0 0 0 1.426-.013l8.2-8.4ZM15.85 20.3l4.975 4.975M6.75 11.2l4.963 4.975"
    />
  </svg>
);

export default SvgMagnet;
