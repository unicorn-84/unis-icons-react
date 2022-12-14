import * as React from 'react';
import { SVGProps } from 'react';

const SvgPatreonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#F76754"
      d="M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21Z"
    />
    <path fill="#002C49" d="M15 36h4.5V15H15v21Z" />
    <path
      fill="#fff"
      d="M28.512 15C32.64 15 36 18.37 36 22.511 36 26.641 32.64 30 28.512 30 24.37 30 21 26.64 21 22.511 21 18.37 24.37 15 28.512 15Z"
    />
  </svg>
);

export default SvgPatreonIcon;
