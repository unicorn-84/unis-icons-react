import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobeHemisphereEast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.2 22.925 1.463-.887a1 1 0 0 0 .475-.85l.025-4.513a.963.963 0 0 1 .162-.525l2.475-3.887a1.012 1.012 0 0 1 1.438-.275l2.45 1.774c.21.148.468.214.724.188l3.938-.537a.975.975 0 0 0 .612-.338l2.776-3.2c.164-.195.249-.445.237-.7l-.138-3.038m.55 19.325-1.35-1.35a1.025 1.025 0 0 0-.45-.262l-2.687-.7a1 1 0 0 1-.725-1.112l.287-2.026a1.027 1.027 0 0 1 .613-.774l3.8-1.588a1 1 0 0 1 1.063.188l3.112 2.85"
    />
  </svg>
);

export default SvgGlobeHemisphereEast;
