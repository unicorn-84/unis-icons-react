import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsInCardinal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.537 23.538 16 20l-3.538 3.538M16 29v-9M12.462 8.462 16 12l3.537-3.538M16 3v9m-7.538 7.537L12 16l-3.538-3.538M3 16h9m11.538-3.538L20 16l3.538 3.537M29 16h-9"
    />
  </svg>
);

export default SvgArrowsInCardinal;
