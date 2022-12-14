import * as React from 'react';
import { SVGProps } from 'react';

const SvgOperaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#opera-icon_svg__a)"
      d="M17.422 35.266c-2.219-2.61-3.64-6.47-3.735-10.797v-.938c.094-4.328 1.532-8.187 3.735-10.797 2.875-3.718 7.094-5.39 11.86-5.39 2.937 0 5.702.203 8.046 1.765A19.79 19.79 0 0 0 24.078 4H24C12.953 4 4 12.953 4 24c0 10.719 8.438 19.484 19.047 19.984.312.016.64.016.953.016a19.87 19.87 0 0 0 13.328-5.094c-2.344 1.563-4.953 1.625-7.89 1.625-4.75.016-9.157-1.531-12.016-5.265Z"
    />
    <path
      fill="url(#opera-icon_svg__b)"
      d="M17.422 12.734c1.828-2.171 4.203-3.468 6.797-3.468 5.828 0 10.547 6.593 10.547 14.75 0 8.156-4.72 14.75-10.547 14.75-2.594 0-4.953-1.313-6.797-3.47 2.875 3.72 7.14 6.095 11.89 6.095 2.922 0 5.672-.891 8.016-2.453C41.422 35.25 44 29.922 44 24c0-5.922-2.578-11.25-6.672-14.906C34.984 7.53 32.25 6.64 29.312 6.64c-4.765 0-9.03 2.359-11.89 6.093Z"
    />
    <defs>
      <linearGradient
        id="opera-icon_svg__a"
        x1={20.665}
        x2={20.665}
        y1={4.652}
        y2={43.418}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.3} stopColor="#FF1B2D" />
        <stop offset={0.438} stopColor="#FA1A2C" />
        <stop offset={0.594} stopColor="#ED1528" />
        <stop offset={0.758} stopColor="#D60E21" />
        <stop offset={0.927} stopColor="#B70519" />
        <stop offset={1} stopColor="#A70014" />
      </linearGradient>
      <linearGradient
        id="opera-icon_svg__b"
        x1={30.708}
        x2={30.708}
        y1={6.937}
        y2={41.224}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9C0000" />
        <stop offset={0.7} stopColor="#FF4B4B" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgOperaIcon;
