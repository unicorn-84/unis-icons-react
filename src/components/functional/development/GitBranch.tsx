import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitBranch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm15-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-15 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 8v-1a2.987 2.987 0 0 1 3-3h9a2.986 2.986 0 0 0 3-3v-1m-15 0v8"
    />
  </svg>
);

export default SvgGitBranch;
