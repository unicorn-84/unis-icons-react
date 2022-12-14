import * as React from 'react';
import { SVGProps } from 'react';

const SvgAngularIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#DD0031" d="M24 3 4.5 10.5l3 25.5L24 45l16.5-9 3-25.5L24 3Z" />
    <path fill="#C3002F" d="M24 3v42l16.5-9 3-25.5L24 3Z" />
    <path
      fill="#fff"
      d="M24 7.641 11.81 35.046h4.545l2.45-6.132h10.348l2.45 6.132h4.545L24 7.641Zm3.56 17.493h-7.12L24 16.545l3.56 8.589Z"
    />
  </svg>
);

export default SvgAngularIcon;
