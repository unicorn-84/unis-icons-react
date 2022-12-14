import * as React from 'react';
import { SVGProps } from 'react';

const SvgNpmLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 171 69"
    {...props}
  >
    <path
      fill="#C12127"
      d="M54.26 60.484h20.827V50.07h20.826V8.416H54.26v52.068ZM75.087 18.83H85.5v20.827H75.087V18.83Zm29.157-10.414V50.07h20.827V18.83h10.414v31.24h10.413V18.83h10.414v31.24h10.413V8.416h-62.481ZM4.275 50.07h20.827V18.83h10.413v31.24H45.93V8.416H4.275V50.07Z"
    />
  </svg>
);

export default SvgNpmLogo;
