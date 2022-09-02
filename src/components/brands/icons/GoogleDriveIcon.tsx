import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#0066DA"
      d="m8.722 35.567 1.587 2.742a3.74 3.74 0 0 0 1.361 1.361l5.67-9.814H6c0 .639.165 1.278.495 1.855l2.227 3.856Z"
    />
    <path
      fill="#00AC47"
      d="m24 18.31-5.67-9.815a3.734 3.734 0 0 0-1.36 1.36L6.494 28A3.736 3.736 0 0 0 6 29.856h11.34L24 18.309Z"
    />
    <path
      fill="#EA4335"
      d="M36.33 39.67a3.744 3.744 0 0 0 1.36-1.36l.66-1.135 3.155-5.464c.33-.577.495-1.216.495-1.855H30.659l2.413 4.742 3.258 5.072Z"
    />
    <path
      fill="#00832D"
      d="m24 18.31 5.67-9.815A3.625 3.625 0 0 0 27.814 8h-7.628a3.84 3.84 0 0 0-1.856.495L24 18.309Z"
    />
    <path
      fill="#2684FC"
      d="M30.66 29.856H17.34l-5.67 9.814c.557.33 1.196.495 1.856.495h20.948a3.84 3.84 0 0 0 1.856-.495l-5.67-9.814Z"
    />
    <path
      fill="#FFBA00"
      d="m36.268 18.928-5.237-9.072a3.744 3.744 0 0 0-1.36-1.361L24 18.309l6.66 11.547h11.32c0-.64-.166-1.279-.495-1.856l-5.217-9.072Z"
    />
  </svg>
);

export default SvgGoogleDriveIcon;
