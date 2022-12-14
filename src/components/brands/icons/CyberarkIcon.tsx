import * as React from 'react';
import { SVGProps } from 'react';

const SvgCyberarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#4E8DCB" d="M24 6 8.383 15.023l8.033 4.616L24 15.262V6Z" />
    <path
      fill="#1F6DAE"
      d="M31.584 28.361 24 32.738 24.03 42l15.587-8.992v-9.263l-8.033 4.616ZM24 6v9.262l7.584 4.377 8.003-4.646L24 6Z"
    />
    <path
      fill="#4E8DCB"
      d="M8.413 33.008 24.03 42 24 32.738l-7.584-4.347-8.003 4.617Z"
    />
    <path
      fill="#1F6DAE"
      d="m8.413 33.008 8.003-4.617V19.64l-8.033-4.616.03 17.985Z"
    />
    <path fill="#888" d="m24 15.262 7.584 4.377v8.752L24 24.015v-8.753Z" />
    <path fill="#595757" d="m24 15.262-7.584 4.377v8.752L24 24.015v-8.753Z" />
  </svg>
);

export default SvgCyberarkIcon;
