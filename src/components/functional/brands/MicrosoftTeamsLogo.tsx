import * as React from 'react';
import { SVGProps } from 'react';

const MicrosoftTeamsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 9H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11h4a1 1 0 0 1 1 1v9a7 7 0 0 1-7 7v0a7.013 7.013 0 0 1-6.713-5m3.463-10h-4.5m2.25 6v-6m2.037-4A4 4 0 1 1 19 10.462"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.762 5.65a3.25 3.25 0 1 1-.425 3.55"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 11h3.413a.587.587 0 0 1 .587.588V19a4 4 0 0 1-4 4h-.288"
    />
  </svg>
);

export default MicrosoftTeamsLogo;