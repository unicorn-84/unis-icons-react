import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleDocsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M27.272 6h-13.91c-1.307 0-2.453 1.145-2.453 2.455v31.09c0 1.309 1.144 2.455 2.455 2.455h21.272c1.309 0 2.455-1.145 2.455-2.455V15.818l-5.726-4.091L27.272 6Z"
    />
    <path
      fill="#F1F1F1"
      d="M17.453 32.181h13.09v-1.636H17.456l-.002 1.636Zm0 3.273h9.818v-1.636h-9.818v1.636Zm0-11.455v1.636h13.09V24h-13.09Zm0 4.909h13.09v-1.636H17.456l-.002 1.636Z"
    />
    <path
      fill="#A1C2FA"
      d="M27.272 6v7.364c0 1.309 1.145 2.454 2.454 2.454h7.364L27.272 6Z"
    />
  </svg>
);

export default SvgGoogleDocsIcon;
