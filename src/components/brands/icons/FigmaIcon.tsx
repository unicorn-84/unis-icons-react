import * as React from 'react';
import { SVGProps } from 'react';

const SvgFigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#figma-icon_svg__a)">
      <path fill="#1ABCFE" d="M24 24a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
      <path fill="#0ACF83" d="M12 36a6 6 0 0 1 6-6h6v6a6 6 0 1 1-12 0Z" />
      <path fill="#FF7262" d="M24 6v12h6a6 6 0 1 0 0-12h-6Z" />
      <path fill="#F24E1E" d="M12 12a6 6 0 0 0 6 6h6V6h-6a6 6 0 0 0-6 6Z" />
      <path fill="#A259FF" d="M12 24a6 6 0 0 0 6 6h6V18h-6a6 6 0 0 0-6 6Z" />
    </g>
    <defs>
      <clipPath id="figma-icon_svg__a">
        <path fill="#fff" d="M0 0h24v36H0z" transform="translate(12 6)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFigmaIcon;
