import * as React from 'react';
import { SVGProps } from 'react';

const SvgYandexIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#fff"
      d="M3 24C3 12.402 12.402 3 24 3s21 9.402 21 21-9.402 21-21 21S3 35.598 3 24Z"
    />
    <path
      fill="#FF0013"
      d="m12.828 11.34-1.75 2.187a1 1 0 0 0 .1 1.355L21.75 24.75V39h4.5V24.75l10.573-9.868a1 1 0 0 0 .098-1.355l-1.748-2.186a1 1 0 0 0-1.462-.108L24 20.25l-9.711-9.018a1 1 0 0 0-1.461.109Z"
    />
  </svg>
);

export default SvgYandexIcon;
