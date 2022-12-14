import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitlabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#E24329" d="m24 40.58 6.628-20.4H17.371L24 40.58Z" />
    <path fill="#FC6D26" d="m24 40.58-6.629-20.4h-9.29L24 40.58Z" />
    <path
      fill="#FCA326"
      d="m8.082 20.18-2.015 6.2a1.372 1.372 0 0 0 .499 1.534L24 40.581 8.082 20.18Z"
    />
    <path
      fill="#E24329"
      d="M8.082 20.18h9.29L13.378 7.893c-.205-.632-1.1-.632-1.305 0L8.082 20.18Z"
    />
    <path fill="#FC6D26" d="m24 40.58 6.629-20.4h9.29L24 40.58Z" />
    <path
      fill="#FCA326"
      d="m39.918 20.18 2.015 6.2a1.372 1.372 0 0 1-.499 1.534L24 40.581l15.918-20.4Z"
    />
    <path
      fill="#E24329"
      d="M39.918 20.18h-9.29l3.993-12.287c.205-.632 1.1-.632 1.305 0l3.992 12.287Z"
    />
  </svg>
);

export default SvgGitlabIcon;
