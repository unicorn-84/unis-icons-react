import * as React from 'react';
import { SVGProps } from 'react';

const SvgPolicytechIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#522D6F"
      fillRule="evenodd"
      d="M5.999 6h36v36h-36V6Zm4 4v28h28V10h-28Z"
      clipRule="evenodd"
    />
    <path
      fill="#5F5B5C"
      d="M19.72 29v-4h1.07c1.91 0 3.21-.93 3.21-3 0-1.5-.7-3-2.74-3H17.7v10h2.02Zm.89-5.47h-.89v-3h.84c1 0 1.4.56 1.4 1.54s-.55 1.46-1.35 1.46Zm8 5.47v-8.34h2.19V19h-6.37v1.66h2.19V29h1.99Z"
    />
  </svg>
);

export default SvgPolicytechIcon;
