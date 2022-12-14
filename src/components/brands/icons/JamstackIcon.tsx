import * as React from 'react';
import { SVGProps } from 'react';

const SvgJamstackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#F0047F"
      d="M24 6C14.047 6 6 14.047 6 24s8.047 18 18 18 18-8.047 18-18V6H24Z"
    />
    <path
      fill="#fff"
      d="M23.021 24.979V38.1c-6.984-.4-12.605-5.955-13.108-12.911l-.014-.211h13.122Zm12.792 0c-.366 6.984-5.459 12.605-11.835 13.108l-.194.014V24.979h12.029Zm.016-12.808v12.045H23.784V12.17H35.83Z"
    />
  </svg>
);

export default SvgJamstackIcon;
