import * as React from 'react';
import { SVGProps } from 'react';

const SvgSoundcloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#FF5502" />
    <path
      fill="#fff"
      d="M35.895 31.5H23.616V16.666C24.754 15.626 26.227 15 27.837 15c3.562 0 6.458 3.07 6.522 6.882a4.31 4.31 0 0 1 1.536-.282c2.543 0 4.605 2.216 4.605 4.95s-2.062 4.95-4.605 4.95ZM22.5 18H21v13.5h1.5V18ZM18 19.5h1.5v12H18v-12Zm-1.5 3H15v9h1.5v-9ZM12 21h1.5v10.5H12V21Zm-1.5 3H9v7.5h1.5V24Z"
    />
  </svg>
);

export default SvgSoundcloudIcon;
