import * as React from 'react';
import { SVGProps } from 'react';

const SvgVisualStudioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#52218A"
      d="M11.201 34.275a1.5 1.5 0 0 1-1.552.244l-2.726-1.144A1.5 1.5 0 0 1 6 32V16.002a1.5 1.5 0 0 1 .923-1.377L9.649 13.5a1.5 1.5 0 0 1 1.552.244l.611.506a.829.829 0 0 0-1.312.675v18.15a.829.829 0 0 0 1.313.675l-.612.525Z"
    />
    <path
      fill="#6C33AF"
      d="M6.923 33.375A1.5 1.5 0 0 1 6 32v-.124a.866.866 0 0 0 1.5.582L30.75 6.75a2.25 2.25 0 0 1 2.557-.435l7.418 3.57A2.25 2.25 0 0 1 42 11.915V12a1.421 1.421 0 0 0-2.321-1.098L11.812 33.75l-.61.525a1.5 1.5 0 0 1-1.553.244l-2.726-1.144Z"
    />
    <path
      fill="#854CC7"
      d="M6.923 14.625A1.5 1.5 0 0 0 6 16.002v.123a.866.866 0 0 1 1.5-.58L30.75 41.25a2.25 2.25 0 0 0 2.557.435l7.418-3.57A2.25 2.25 0 0 0 42 36.087V36a1.421 1.421 0 0 1-2.321 1.1L11.812 14.25l-.61-.525a1.5 1.5 0 0 0-1.553-.225l-2.726 1.125Z"
    />
    <path
      fill="#B179F1"
      d="M33.307 41.685a2.25 2.25 0 0 1-2.557-.435 1.32 1.32 0 0 0 2.25-.933V7.692a1.32 1.32 0 0 0-2.25-.942 2.25 2.25 0 0 1 2.557-.435l7.418 3.567A2.25 2.25 0 0 1 42 11.91v24.18a2.25 2.25 0 0 1-1.275 2.03l-7.418 3.565Z"
    />
    <path
      fill="url(#visual-studio-icon_svg__a)"
      fillOpacity={0.25}
      d="M31.834 41.85a2.25 2.25 0 0 0 1.473-.165l7.418-3.566A2.25 2.25 0 0 0 42 36.09V11.91a2.25 2.25 0 0 0-1.275-2.028l-7.418-3.567a2.25 2.25 0 0 0-1.68-.108 2.25 2.25 0 0 0-.877.543L18.795 19.973l-6.983-5.723-.61-.525a1.5 1.5 0 0 0-1.553-.243l-2.726 1.143A1.5 1.5 0 0 0 6 15.89v16.223a1.5 1.5 0 0 0 .923 1.263L9.649 34.5a1.5 1.5 0 0 0 1.553-.244l.61-.506 6.983-5.722L30.75 41.25c.298.298.674.506 1.084.6ZM33 16.38 23.704 24 33 31.62V16.38Zm-22.5 2.472L15.154 24 10.5 29.15V18.851Z"
    />
    <defs>
      <linearGradient
        id="visual-studio-icon_svg__a"
        x1={24}
        x2={24}
        y1={6.094}
        y2={41.907}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgVisualStudioIcon;
