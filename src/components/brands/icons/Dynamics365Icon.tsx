import * as React from 'react';
import { SVGProps } from 'react';

const SvgDynamics365Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#dynamics-365-icon_svg__a)"
      d="M11.713 44V16.888c.506.323.966.599 1.38.875 2.026 1.289 4.005 2.578 6.03 3.866.323.185.415.415.277.783-.967 2.854-1.933 5.662-2.854 8.515-.737 2.164-1.427 4.373-2.163 6.537-.553 1.61-1.105 3.176-1.658 4.787-.046.138-.092.23-.046.414.184-.138.46-.276.599-.46 1.197-1.289 2.393-2.624 3.59-3.867 1.887-1.979 3.775-3.866 5.662-5.846 1.565-1.61 3.084-3.222 4.603-4.787 1.841-1.887 3.636-3.774 5.477-5.661.875-.92 1.75-1.795 2.624-2.716.368-.368.69-.782 1.15-1.105v11.738c0 .414-.137.644-.505.874-1.934 1.013-3.821 2.072-5.754 3.084-2.624 1.427-5.248 2.9-7.917 4.327l-6.629 3.59c-1.15.645-2.255 1.243-3.406 1.888-.046.092-.23.138-.46.276Z"
    />
    <path
      fill="url(#dynamics-365-icon_svg__b)"
      d="M11.62 4c8.01 4.327 15.927 8.654 23.89 12.98-.782.553-1.473 1.105-2.163 1.611-1.841 1.29-3.683 2.578-5.478 3.913-.276.184-.506.23-.782.046-1.611-.829-3.268-1.611-4.88-2.393-3.175-1.566-6.352-3.13-9.574-4.604-.828-.368-1.058-.782-1.012-1.657V4Z"
    />
    <defs>
      <linearGradient
        id="dynamics-365-icon_svg__a"
        x1={11.732}
        x2={36.408}
        y1={30.435}
        y2={30.435}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.525} stopColor="#61C3FF" />
        <stop offset={1} stopColor="#13A4FF" />
      </linearGradient>
      <linearGradient
        id="dynamics-365-icon_svg__b"
        x1={11.586}
        x2={35.517}
        y1={13.342}
        y2={13.342}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.525} stopColor="#61C3FF" />
        <stop offset={1} stopColor="#13A4FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgDynamics365Icon;
