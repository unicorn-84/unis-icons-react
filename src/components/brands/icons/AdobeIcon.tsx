import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="red"
      d="M28.648 9H42v30L28.648 9Zm-9.296 0H6v30L19.352 9ZM24 20.102 32.398 39h-5.703l-2.398-6h-6.149L24 20.102Z"
    />
  </svg>
);

export default SvgAdobeIcon;
