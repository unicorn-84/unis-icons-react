import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleSitesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#4758B5"
      d="M35.818 44H12.182a2.727 2.727 0 0 1-2.727-2.727V6.727A2.727 2.727 0 0 1 12.182 4h16.363l10 10v27.273A2.727 2.727 0 0 1 35.818 44Z"
    />
    <path fill="#354287" d="m28.545 4 10 10h-10V4Z" />
    <path
      fill="#fff"
      d="M32.182 19.455H15.818v2.272h16.364v-2.272Zm0 4.545h-2.273v7.727h2.273V24Zm-4.546 0H15.818v7.727h11.818V24Z"
    />
  </svg>
);

export default SvgGoogleSitesIcon;
