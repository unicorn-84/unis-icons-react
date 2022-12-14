import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleTvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M38.829 9.41H15.177a3.73 3.73 0 0 0-3.727 3.727v3.728h28.823a3.73 3.73 0 0 1 3.728 3.728v-6.011a5.168 5.168 0 0 0-5.172-5.173Z"
    />
    <path
      fill="#34A853"
      d="M9.173 9.41a5.168 5.168 0 0 0-5.172 5.172v12.832a3.73 3.73 0 0 0 3.728 3.728h3.728V13.137a3.724 3.724 0 0 1 3.72-3.728H9.173Z"
    />
    <path
      fill="#FBBC04"
      d="M9.173 38.59h23.652a3.73 3.73 0 0 0 3.727-3.727v-3.728H7.73A3.724 3.724 0 0 1 4 27.415v6.003a5.168 5.168 0 0 0 5.172 5.172Z"
    />
    <path
      fill="#EA4335"
      d="M38.829 38.59A5.168 5.168 0 0 0 44 33.419V20.586a3.73 3.73 0 0 0-3.728-3.728h-3.728v18.005a3.73 3.73 0 0 1-3.728 3.728h6.012Z"
    />
  </svg>
);

export default SvgGoogleTvIcon;
