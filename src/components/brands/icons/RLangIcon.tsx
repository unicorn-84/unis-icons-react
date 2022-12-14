import * as React from 'react';
import { SVGProps } from 'react';

const SvgRLangIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#r-lang-icon_svg__a)"
      fillRule="evenodd"
      d="M15 24.143c7.732 0 14-4.285 14-9.572C29 9.285 22.732 5 15 5S1 9.285 1 14.571c0 5.287 6.268 9.572 14 9.572Zm1.89-2.429c5.76 0 10.43-1.857 10.43-6.5s-4.67-6.5-10.43-6.5-10.43 2.91-10.43 6.5 4.67 6.5 10.43 6.5Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#r-lang-icon_svg__b)"
      fillRule="evenodd"
      d="M22.7 19.714h-.42l.945.386a3.524 3.524 0 0 1 1.76 1.581L27.88 27h-5.32l-2.488-4.825a3.561 3.561 0 0 0-.82-1.048l-.157-.138a1.107 1.107 0 0 0-.73-.275H17.24V27h-4.76V10.929l10.22-.053c1.82 0 3.78 1.929 3.78 4.42 0 2.49-1.96 4.418-3.78 4.418Zm-5.32-5.285 2.94.001c.702.038 1.26.63 1.26 1.356 0 .725-.558 1.32-1.26 1.357h-2.94v-2.714Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="r-lang-icon_svg__a"
        x1={3.87}
        x2={29.11}
        y1={9.143}
        y2={17.824}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C8CBCD" />
        <stop offset={1} stopColor="#88888F" />
      </linearGradient>
      <linearGradient
        id="r-lang-icon_svg__b"
        x1={27.88}
        x2={9.798}
        y1={27}
        y2={11.861}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185DAC" />
        <stop offset={1} stopColor="#2F72C4" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRLangIcon;
