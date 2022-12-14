import * as React from 'react';
import { SVGProps } from 'react';

const SvgAtlassianIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#atlassian-icon_svg__a)"
      d="M16.676 22.626c-.538-.575-1.376-.542-1.742.19L6.111 40.46a1.055 1.055 0 0 0 .944 1.527h12.287c.402.009.772-.22.943-.584 2.65-5.477 1.044-13.806-3.609-18.778Z"
    />
    <path
      fill="#2681FF"
      d="M23.15 6.577c-4.935 7.819-4.61 16.478-1.36 22.978l5.925 11.85c.179.357.544.582.944.582h12.286a1.054 1.054 0 0 0 .944-1.526S25.359 7.398 24.944 6.57c-.372-.741-1.316-.751-1.794.006Z"
    />
    <defs>
      <linearGradient
        id="atlassian-icon_svg__a"
        x1={15.161}
        x2={2.791}
        y1={19.436}
        y2={32.724}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset={0.923} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAtlassianIcon;
