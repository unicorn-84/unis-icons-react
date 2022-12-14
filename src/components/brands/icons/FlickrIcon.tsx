import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlickrIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FF0084"
      d="M25.5 24a9.001 9.001 0 1 0 18.002-.002A9.001 9.001 0 0 0 25.5 24Z"
    />
    <path fill="#0063DC" d="M4.5 24a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
);

export default SvgFlickrIcon;
