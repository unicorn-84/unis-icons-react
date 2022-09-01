import * as React from 'react';
import { SVGProps } from 'react';

const SvgJiraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#2684FF"
      d="M38.663 8h-15.41a6.956 6.956 0 0 0 6.957 6.956h2.838v2.74A6.956 6.956 0 0 0 40 24.649V9.337C40 8.599 39.402 8 38.663 8Z"
    />
    <path
      fill="url(#jira-icon_svg__a)"
      d="M31.04 15.678H15.63a6.956 6.956 0 0 0 6.951 6.952h2.839v2.75a6.956 6.956 0 0 0 6.956 6.946V17.015c0-.738-.599-1.337-1.337-1.337Z"
    />
    <path
      fill="url(#jira-icon_svg__b)"
      d="M23.41 23.352H8a6.956 6.956 0 0 0 6.956 6.956h2.848v2.74A6.956 6.956 0 0 0 24.746 40V24.689c0-.739-.598-1.337-1.336-1.337Z"
    />
    <defs>
      <linearGradient
        id="jira-icon_svg__a"
        x1={28.646}
        x2={22.131}
        y1={12.447}
        y2={19.245}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="jira-icon_svg__b"
        x1={495.726}
        x2={215.821}
        y1={459.777}
        y2={736.784}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgJiraIcon;
