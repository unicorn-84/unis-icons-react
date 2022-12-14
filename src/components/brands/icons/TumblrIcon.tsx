import * as React from 'react';
import { SVGProps } from 'react';

const SvgTumblrIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#303D4D"
      d="M33.571 35.949c-.743.354-2.166.663-3.229.691-3.2.086-3.822-2.249-3.85-3.944V20.244h8.033v-6.055h-8.003V4h-5.86c-.096 0-.264.084-.287.299-.342 3.118-1.803 8.591-7.87 10.778v5.167h4.049v13.071c0 4.474 3.3 10.83 12.015 10.683 2.938-.05 6.203-1.283 6.926-2.343l-1.924-5.706Z"
    />
  </svg>
);

export default SvgTumblrIcon;
