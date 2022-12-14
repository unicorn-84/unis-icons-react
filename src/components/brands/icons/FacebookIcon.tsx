import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1877F2"
      d="m31.446 26 .889-5.791h-5.557V16.45c0-1.585.776-3.13 3.265-3.13h2.526V8.39S30.277 8 28.085 8c-4.576 0-7.568 2.774-7.568 7.795v4.414h-5.086V26h5.086v14h6.261V26h4.668Z"
    />
  </svg>
);

export default SvgFacebookIcon;
