import * as React from 'react';
import { SVGProps } from 'react';

const SvgYoutubeMusicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="red"
      d="M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21Z"
    />
    <path
      fill="#fff"
      d="M24 14.422c5.282 0 9.578 4.296 9.578 9.578 0 5.282-4.296 9.578-9.578 9.578-5.282 0-9.578-4.296-9.578-9.578 0-5.282 4.296-9.578 9.578-9.578Zm0-.922c-5.8 0-10.5 4.7-10.5 10.5S18.2 34.5 24 34.5 34.5 29.8 34.5 24 29.8 13.5 24 13.5Z"
    />
    <path fill="#fff" d="m21 30 9-6.26L21 18v12Z" />
  </svg>
);

export default SvgYoutubeMusicIcon;
