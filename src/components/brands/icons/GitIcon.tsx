import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#EE513B"
      d="M47.096 21.863 26.143.905a3.093 3.093 0 0 0-4.372 0l-4.357 4.353 5.52 5.52c2.9-.979 5.645 1.797 4.65 4.68l5.32 5.321c3.668-1.264 6.555 3.322 3.8 6.074-2.838 2.839-7.522-.307-6-4l-4.966-4.96v13.055c2.711 1.344 2.385 4.484.973 5.893a3.68 3.68 0 0 1-5.202 0c-1.882-1.885-1.186-5.026 1.206-6V17.662c-2.229-.911-2.636-3.293-1.997-4.821l-5.442-5.448L.906 21.765a3.092 3.092 0 0 0 0 4.373l20.958 20.957a3.092 3.092 0 0 0 4.371 0l20.86-20.86a3.092 3.092 0 0 0 0-4.372Z"
    />
  </svg>
);

export default SvgGitIcon;
