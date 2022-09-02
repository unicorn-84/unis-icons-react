import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#book-bookmark_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22 4v12l-4-3-4 3V4" />
      <path d="M6 27a2.988 2.988 0 0 1 3-3h17V4H9a2.987 2.987 0 0 0-3 3v20Zm0 0v1h18" />
    </g>
    <defs>
      <clipPath id="book-bookmark_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBookBookmark;
