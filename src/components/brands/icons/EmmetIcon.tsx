import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmmetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1C1C20"
      d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
    />
    <path
      fill="#BAFFA9"
      d="m31.189 23.514-2.005-2.005 1.03-4.238-4.295.973-1.947-1.947 9.622-2.406-2.405 9.623Z"
    />
    <path
      fill="#7ACB16"
      d="M27.866 36.802 10.684 19.619l9.622-2.406 1.947 1.948-6.873 1.718 3.895 3.895 4.525-1.088-1.146 4.467 3.895 3.895 1.718-6.873 2.005 2.004-2.405 9.623Z"
    />
  </svg>
);

export default SvgEmmetIcon;
