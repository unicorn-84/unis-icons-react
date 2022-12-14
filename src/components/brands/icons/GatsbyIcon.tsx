import * as React from 'react';
import { SVGProps } from 'react';

const SvgGatsbyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#744C9E"
      d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6ZM9.868 24.188l13.944 13.944c-7.657-.1-13.844-6.287-13.944-13.944Zm17.295 13.59-16.942-16.94C11.658 14.553 17.281 9.865 24 9.865c4.697 0 8.857 2.292 11.428 5.816l-1.957 1.727A11.524 11.524 0 0 0 24 12.461c-4.993 0-9.245 3.172-10.852 7.61l14.78 14.78a11.561 11.561 0 0 0 7.276-8.082h-6.127V24h9.058c0 6.719-4.688 12.342-10.971 13.779Z"
    />
  </svg>
);

export default SvgGatsbyIcon;
