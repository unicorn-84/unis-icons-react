import * as React from 'react';
import { SVGProps } from 'react';

const SvgAmdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#19A771"
      d="M16.5 31.5V18L6 28.5V42h13.5L30 31.5H16.5ZM42 6H6l10.5 10.5h15v15L42 42V6Z"
    />
  </svg>
);

export default SvgAmdIcon;
