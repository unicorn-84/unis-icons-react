import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.688 12h22.625M4.688 20h22.625"
    />
    <path
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 27.675c2.761 0 5-5.227 5-11.675S18.761 4.325 16 4.325 11 9.552 11 16s2.239 11.675 5 11.675Z"
    />
  </svg>
);

export default SvgGlobe;
