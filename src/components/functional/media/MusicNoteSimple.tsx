import * as React from 'react';
import { SVGProps } from 'react';

const SvgMusicNoteSimple = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#music-note-simple_svg__a)"
    >
      <path d="M11 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path d="M16 23V5l10 3" />
    </g>
    <defs>
      <clipPath id="music-note-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMusicNoteSimple;
