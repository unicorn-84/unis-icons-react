import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleAppStoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#apple-app-store-icon_svg__a)"
      d="M34.724 6H13.271A7.269 7.269 0 0 0 6 13.272v21.46A7.268 7.268 0 0 0 13.271 42H34.73A7.272 7.272 0 0 0 42 34.728V13.272A7.275 7.275 0 0 0 34.724 6Z"
    />
    <path
      fill="#fff"
      d="m23.845 14.271.73-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.024 12.159h5.08c1.647 0 2.57 1.935 1.854 3.276H12.435a1.632 1.632 0 0 1-1.638-1.638c0-.909.729-1.638 1.638-1.638h4.175l5.346-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.715 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.843-1.638l1.17-2.025c1.322-.41 2.398-.095 3.248.931Zm13.561-4.954h4.261c.91 0 1.638.729 1.638 1.638 0 .909-.729 1.638-1.638 1.638h-2.366l1.597 2.772a1.642 1.642 0 0 1-2.844 1.638c-2.69-4.666-4.71-8.159-6.052-10.485-1.372-2.367-.39-4.743.576-5.549 1.076 1.845 2.682 4.631 4.828 8.348Z"
    />
    <defs>
      <linearGradient
        id="apple-app-store-icon_svg__a"
        x1={23.998}
        x2={23.998}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0ED4FC" />
        <stop offset={1} stopColor="#0C57EF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleAppStoreIcon;
