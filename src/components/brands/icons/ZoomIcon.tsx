import * as React from 'react';
import { SVGProps } from 'react';

const SvgZoomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width={48} height={48} fill="#4087FC" rx={10} />
    <path
      fill="#fff"
      d="M10.743 13.714c-1.2 0-2.171 1.097-2.171 2.45V28.04c0 3.449 2.479 6.245 5.537 6.245l12.862-.123c1.2 0 2.172-1.096 2.172-2.449v-12c0-3.449-2.942-6-6-6h-12.4Zm21.335 4.676c-.776.767-1.22 1.875-1.22 3.039v4.97c0 1.164.444 2.27 1.22 3.038l4.829 4.253c.982.971 2.522.184 2.522-1.29V15.66c0-1.473-1.54-2.26-2.522-1.289l-4.829 4.02Z"
    />
  </svg>
);

export default SvgZoomIcon;
