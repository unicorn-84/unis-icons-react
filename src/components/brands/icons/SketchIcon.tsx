import * as React from 'react';
import { SVGProps } from 'react';

const SvgSketchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FDB300"
      fillRule="evenodd"
      d="M13.854 10.016 24 9l10.145 1.016L42 20.003 24 39.857 6 20.003l7.854-9.987Z"
      clipRule="evenodd"
    />
    <path
      fill="#EA6C00"
      d="M13.29 20.003 24 39.857 6 20.003h7.29Zm21.42 0L24 39.857l18-19.854"
    />
    <path
      fill="#FDAD00"
      fillRule="evenodd"
      d="M13.291 20.003h21.418L24 39.857"
      clipRule="evenodd"
    />
    <path
      fill="#FDD231"
      d="m24 9-10.145 1.016-.564 9.987L24.001 9Zm0 0 10.146 1.016.563 9.987"
    />
    <path
      fill="#FDAD00"
      d="m42 20.003-7.854-9.987.563 9.987H42Zm-36 0 7.854-9.987-.563 9.987"
    />
    <path
      fill="#FEEEB7"
      fillRule="evenodd"
      d="M24 9 13.291 20.003h21.418"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSketchIcon;
