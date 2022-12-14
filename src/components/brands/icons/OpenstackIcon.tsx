import * as React from 'react';
import { SVGProps } from 'react';

const SvgOpenstackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#DA1A32"
      d="M14.13 30.39v1.288c0 .999.81 1.808 1.81 1.808h16.122c.999 0 1.809-.809 1.809-1.808V30.39H42v7.883a3.355 3.355 0 0 1-3.345 3.344H9.345A3.355 3.355 0 0 1 6 38.273V30.39h8.13Zm0-10.455v8.129H6v-8.13h8.13Zm27.87 0v8.129h-8.13v-8.13H42ZM38.655 6.383A3.355 3.355 0 0 1 42 9.729v7.88h-8.13v-1.287c0-.999-.809-1.808-1.808-1.808H15.938c-.999 0-1.809.809-1.809 1.808v1.288H6V9.727a3.355 3.355 0 0 1 3.345-3.344h29.31Z"
    />
  </svg>
);

export default SvgOpenstackIcon;
