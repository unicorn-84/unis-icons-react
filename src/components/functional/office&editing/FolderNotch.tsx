import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#folder-notch_svg__a)"
    >
      <path d="M16 10h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13" />
      <path d="M11.662 13H4V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2L16 10l-3.738 2.8c-.173.129-.383.2-.6.2v0Z" />
    </g>
    <defs>
      <clipPath id="folder-notch_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderNotch;
