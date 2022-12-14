import * as React from 'react';
import { SVGProps } from 'react';

const SvgVsCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#vs-code-icon_svg__a)"
      d="M33.002 7.436c0-1.13-1.265-1.13-1.827-.989.787-.622 1.71-.47 2.038-.282l7.603 3.727A2.12 2.12 0 0 1 42 11.797V36.32a2.12 2.12 0 0 1-1.211 1.917l-7.154 3.383c-.492.212-1.56.735-2.46 0 1.124.212 1.733-.588 1.827-1.13V7.436Z"
    />
    <path
      fill="url(#vs-code-icon_svg__b)"
      d="M31.266 6.427c.597-.118 1.736-.064 1.736 1.009v8.441L9.952 33.315a.98.98 0 0 1-1.313-.117l-2.376-2.57a.992.992 0 0 1 .058-1.404L31.175 6.447l.09-.02Z"
    />
    <path
      fill="url(#vs-code-icon_svg__c)"
      d="M33.002 32.19 9.952 14.754a.98.98 0 0 0-1.313.117l-2.376 2.57a.992.992 0 0 0 .058 1.404l24.854 22.777c1.124.212 1.733-.588 1.827-1.13v-8.3Z"
    />
    <defs>
      <linearGradient
        id="vs-code-icon_svg__a"
        x1={36.587}
        x2={36.587}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B5F1" />
        <stop offset={1} stopColor="#2B9FED" />
      </linearGradient>
      <linearGradient
        id="vs-code-icon_svg__b"
        x1={33.002}
        x2={7.314}
        y1={10.543}
        y2={32.106}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0F6FB3" />
        <stop offset={0.271} stopColor="#1279B7" />
        <stop offset={0.421} stopColor="#1176B5" />
        <stop offset={0.618} stopColor="#0E69AC" />
        <stop offset={0.855} stopColor="#0F70AF" />
        <stop offset={1} stopColor="#0F6DAD" />
      </linearGradient>
      <linearGradient
        id="vs-code-icon_svg__c"
        x1={7.485}
        x2={33.102}
        y1={16.265}
        y2={37.475}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1791D2" />
        <stop offset={1} stopColor="#1173C5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgVsCodeIcon;
