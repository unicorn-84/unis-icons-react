import * as React from 'react';
import { SVGProps } from 'react';

const SvgJsonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#json-icon_svg__a)"
      d="M23.97 32.797c7.964 10.858 15.758-3.03 15.747-11.382-.014-9.874-10.022-15.393-15.754-15.393C14.763 6.022 6 13.626 6 24.03 6 35.594 16.044 42 23.963 42c-1.792-.258-7.764-1.538-7.844-15.293-.054-9.303 3.035-13.02 7.831-11.384.108.04 5.29 2.084 5.29 8.764 0 6.65-5.27 8.71-5.27 8.71Z"
    />
    <path
      fill="url(#json-icon_svg__b)"
      d="M23.96 15.315c-5.263-1.814-11.71 2.524-11.71 11.212C12.25 40.712 22.764 42 24.038 42 33.237 42 42 34.396 42 23.992c0-11.564-10.044-17.97-17.963-17.97 2.193-.303 11.822 2.374 11.822 15.534 0 8.581-7.19 13.253-11.866 11.257-.107-.04-5.29-2.084-5.29-8.764 0-6.65 5.257-8.734 5.257-8.734Z"
    />
    <defs>
      <linearGradient
        id="json-icon_svg__a"
        x1={11.324}
        x2={38.216}
        y1={11.324}
        y2={34.943}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="json-icon_svg__b"
        x1={36.685}
        x2={7.579}
        y1={36.685}
        y2={16.809}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgJsonIcon;
