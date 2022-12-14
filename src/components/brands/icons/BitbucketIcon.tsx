import * as React from 'react';
import { SVGProps } from 'react';

const SvgBitbucketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2684FF"
      fillRule="evenodd"
      d="M8.249 9.968c.198-.229.487-.36.79-.355l29.923.005a1.025 1.025 0 0 1 1.025 1.19l-4.353 26.718a1.025 1.025 0 0 1-1.025.861H13.73a1.394 1.394 0 0 1-1.363-1.163L8.013 10.802a1.025 1.025 0 0 1 .236-.834ZM20.7 28.708h6.665l1.614-9.427H18.897L20.7 28.71Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#bitbucket-icon_svg__a)"
      d="M38.603 19.281H28.98l-1.614 9.428H20.7l-7.869 9.34c.25.216.567.336.897.338h20.885c.508.007.944-.36 1.026-.86l2.963-18.246Z"
    />
    <defs>
      <linearGradient
        id="bitbucket-icon_svg__a"
        x1={32.457}
        x2={21.342}
        y1={16.026}
        y2={31.809}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgBitbucketIcon;
