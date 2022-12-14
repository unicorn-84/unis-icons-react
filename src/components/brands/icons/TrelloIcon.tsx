import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrelloIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#trello-icon_svg__a)"
      d="M38.484 6H9.516A3.516 3.516 0 0 0 6 9.516v28.968A3.516 3.516 0 0 0 9.516 42h28.968A3.516 3.516 0 0 0 42 38.484V9.516A3.516 3.516 0 0 0 38.484 6Z"
    />
    <path
      fill="#fff"
      d="M35.633 10.68h-7.606c-.931 0-1.687.755-1.687 1.688v12.374c0 .932.756 1.688 1.688 1.688h7.605c.931 0 1.687-.756 1.687-1.688V12.367c0-.932-.756-1.687-1.688-1.687Zm-15.66 0h-7.605c-.933 0-1.688.755-1.688 1.688v21.374c0 .933.755 1.688 1.688 1.688h7.604c.932 0 1.688-.755 1.688-1.688V12.369c0-.933-.756-1.688-1.688-1.688Z"
    />
    <defs>
      <linearGradient
        id="trello-icon_svg__a"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0091E6" />
        <stop offset={1} stopColor="#0079BF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTrelloIcon;
