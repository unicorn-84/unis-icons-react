import * as React from 'react';
import { SVGProps } from 'react';

const SvgNpmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#C12127" d="M6 42V6h36v36H6Z" />
    <path fill="#fff" d="M12.75 12.75h22.5v22.5h-4.5v-18H24v18H12.75v-22.5Z" />
  </svg>
);

export default SvgNpmIcon;
