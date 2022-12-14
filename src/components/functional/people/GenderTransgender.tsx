import * as React from 'react';
import { SVGProps } from 'react';

const SvgGenderTransgender = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 28a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm5.663-13.662L27 5m-6 0h6v6m-9-3 6 6"
    />
  </svg>
);

export default SvgGenderTransgender;
