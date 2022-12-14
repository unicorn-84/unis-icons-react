import * as React from 'react';
import { SVGProps } from 'react';

const SvgMarvelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1FB6FF"
      fillRule="evenodd"
      d="M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21.907 19.382c1.538.016-1.17 7.999-.879 11.469.293 3.501 4.167 2.493 3.921.477-.418-3.426 1.864-14.162 4.18-14.162 1.623 0-1.8 7.401-1.126 12.14.445 3.137 4.49 2.049 4.079.19-1.36-6.154 2.853-12.067 2.38-16.257-.206-1.834-1.308-2.73-2.41-2.739-3.862-.03-6.845 7.889-6.845 7.889s.31-4.5-2.69-4.666c-4.595-.253-9.143 11.246-9.014 21.513.04 3.276 4.117 2.718 3.903.106-.399-4.857 2.31-15.984 4.501-15.96Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMarvelIcon;
