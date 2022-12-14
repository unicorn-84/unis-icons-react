import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretUpDownSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#101828"
      d="M26.25 19.843c0 .347-.127.647-.38.9l-8.97 8.968c-.253.253-.553.38-.9.38s-.647-.127-.9-.38l-8.97-8.967a1.231 1.231 0 0 1-.38-.9c0-.348.127-.648.38-.902.254-.253.554-.38.901-.38H24.97c.347 0 .647.127.9.38.254.254.381.554.381.901Zm0-7.686c0 .347-.127.647-.38.9a1.231 1.231 0 0 1-.901.381H7.03a1.23 1.23 0 0 1-.9-.38 1.231 1.231 0 0 1-.381-.9c0-.348.127-.648.38-.902L15.1 2.29c.253-.253.553-.38.9-.38s.647.127.9.38l8.97 8.967c.253.254.38.554.38.901Z"
    />
  </svg>
);

export default SvgCaretUpDownSort;
