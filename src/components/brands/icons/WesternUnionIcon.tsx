import * as React from 'react';
import { SVGProps } from 'react';

const SvgWesternUnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#0B0006" />
    <path
      fill="#FFFDFE"
      d="M6 18h.953l3.717 13.125h-.953L6 18Zm2.573 0h.953l3.717 13.125h-.953L8.573 18Z"
    />
    <path
      fill="#FEDB32"
      d="M14.005 18h-2.859l3.717 13.125h2.86l2.54-8.531 2.701 8.531h2.716L29.254 18h-2.811l-2.224 8.39L21.63 18h-2.715l-2.574 8.245L14.005 18Zm15.249 6.094L30.874 18h1.24v8.344c0 1.242 1.023 2.25 2.287 2.25h.953c1.263 0 2.287-1.008 2.287-2.25V18H40.5v8.344c0 2.848-2.347 5.156-5.242 5.156h-.762c-2.895 0-5.242-2.308-5.242-5.156v-2.25Z"
    />
  </svg>
);

export default SvgWesternUnionIcon;
