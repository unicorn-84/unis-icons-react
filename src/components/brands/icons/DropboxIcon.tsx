import * as React from 'react';
import { SVGProps } from 'react';

const SvgDropboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#0061FF"
      d="m15 8.704-9 5.733 9 5.734 9-5.733-9-5.734Zm18 0-9 5.734 9 5.734 9-5.734-9-5.734ZM15 31.639l-9-5.733 9-5.734 9 5.733-9 5.734Z"
    />
    <path
      fill="#0061FF"
      d="m33 20.172-9 5.734 9 5.734 9-5.734-9-5.734Zm-9 19.124-9-5.733 9-5.734 9 5.733-9 5.734Z"
    />
  </svg>
);

export default SvgDropboxIcon;
