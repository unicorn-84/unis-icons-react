import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlutterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#47C5FB"
      d="M27.415 6 9.488 23.927l5.548 5.549L38.512 6H27.415Zm-.125 16.532-9.599 9.599 5.57 5.653 5.538-5.539 9.714-9.713H27.29Z"
    />
    <path
      fill="#00569E"
      d="M23.26 37.784 27.478 42h11.035L28.8 32.245l-5.538 5.539Z"
    />
    <path
      fill="#00B5F8"
      d="m17.629 32.193 5.549-5.549 5.621 5.601-5.538 5.539-5.632-5.59Z"
    />
    <path
      fill="url(#flutter-icon_svg__a)"
      fillOpacity={0.8}
      d="m23.26 37.784 4.613-1.53.458-3.54-5.07 5.07Z"
    />
    <defs>
      <linearGradient
        id="flutter-icon_svg__a"
        x1={23.461}
        x2={27.109}
        y1={34.082}
        y2={35.397}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFlutterIcon;
