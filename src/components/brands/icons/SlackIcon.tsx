import * as React from 'react';
import { SVGProps } from 'react';

const SvgSlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2EB67D"
      d="M38.539 22.615a3.461 3.461 0 0 0 0-6.923 3.462 3.462 0 0 0-3.462 3.462v3.461h3.462Zm-9.693 0a3.462 3.462 0 0 0 3.462-3.461V9.462a3.462 3.462 0 0 0-6.923 0v9.692a3.462 3.462 0 0 0 3.461 3.461Z"
    />
    <path
      fill="#E01E5A"
      d="M9.461 25.385a3.461 3.461 0 0 0 0 6.923 3.462 3.462 0 0 0 3.462-3.462v-3.461H9.461Zm9.693 0a3.462 3.462 0 0 0-3.462 3.461v9.692a3.462 3.462 0 0 0 6.923 0v-9.692a3.462 3.462 0 0 0-3.461-3.461Z"
    />
    <path
      fill="#ECB22E"
      d="M25.385 38.539a3.461 3.461 0 0 0 6.922 0 3.462 3.462 0 0 0-3.461-3.462h-3.461v3.462Zm0-9.693a3.461 3.461 0 0 0 3.461 3.462h9.692a3.462 3.462 0 1 0 0-6.923h-9.691a3.462 3.462 0 0 0-3.462 3.461Z"
    />
    <path
      fill="#36C5F0"
      d="M22.615 9.461a3.461 3.461 0 0 0-6.922 0 3.462 3.462 0 0 0 3.461 3.462h3.461V9.461Zm0 9.693a3.461 3.461 0 0 0-3.461-3.462H9.462a3.462 3.462 0 0 0 0 6.923h9.692a3.462 3.462 0 0 0 3.461-3.461Z"
    />
  </svg>
);

export default SvgSlackIcon;
