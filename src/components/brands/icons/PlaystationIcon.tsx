import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlaystationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#0070D1"
      d="M1.037 32.932c-1.797 1.258-1.464 3.426 2.635 4.78 4.098 1.356 8.862 1.636 13.054.881-.12 0 .24 0 0 0v-4.277L12.654 35.7c-1.557.503-3.114.629-4.671.252-1.198-.378-.958-1.133.48-1.762l8.263-3.019v-4.655L5.228 30.668a15.23 15.23 0 0 0-4.191 2.264Zm27.785-18.87v12.203c4.91 2.516 8.743 0 8.743-6.542 0-6.668-2.276-9.687-8.863-12.078-3.473-1.258-7.066-2.39-10.659-3.145v36.358l8.384 2.642V12.929c0-1.384 0-2.39.958-2.013 1.317.377 1.437 1.761 1.437 3.145Zm15.57 15.977c-3.474-1.258-7.187-1.762-10.78-1.384-1.995.13-3.868.725-5.748 1.384v4.906l7.784-3.02c1.557-.502 3.114-.628 4.671-.25 1.198.377.958 1.131-.479 1.76L27.864 38.09v4.781l16.527-6.416c1.198-.503 2.276-1.132 3.234-2.139.838-1.258.479-3.02-3.234-4.277Z"
    />
  </svg>
);

export default SvgPlaystationIcon;
