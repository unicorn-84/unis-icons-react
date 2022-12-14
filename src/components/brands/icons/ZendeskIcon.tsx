import * as React from 'react';
import { SVGProps } from 'react';

const SvgZendeskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#03363D"
      d="M22.629 17.564V37.64H6l16.629-20.077Zm0-7.205a8.316 8.316 0 0 1-8.315 8.314A8.316 8.316 0 0 1 6 10.36h16.629Zm2.742 27.282a8.31 8.31 0 0 1 8.315-8.314A8.313 8.313 0 0 1 42 37.64H25.371Zm0-7.21V10.36H42L25.371 30.432Z"
    />
  </svg>
);

export default SvgZendeskIcon;
