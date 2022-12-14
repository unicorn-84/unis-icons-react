import * as React from 'react';
import { SVGProps } from 'react';

const SvgPhoneDisconnect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.425 12.662a10.488 10.488 0 0 0-6.888.013 1 1 0 0 0-.65.737l-.725 3.688a1.026 1.026 0 0 1-.612.737L4.637 20.2a.987.987 0 0 1-1.162-.313 6 6 0 0 1 .5-7.912 17.013 17.013 0 0 1 24.05 0 6 6 0 0 1 .5 7.912.987.987 0 0 1-1.162.313l-5.913-2.363a1.025 1.025 0 0 1-.613-.724l-.774-3.713a.988.988 0 0 0-.638-.738v0ZM5 25h22"
    />
  </svg>
);

export default SvgPhoneDisconnect;
