import * as React from 'react';
import { SVGProps } from 'react';

const SvgBadooIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#7845F5"
      d="M3 17c0-4.9 0-7.35.954-9.222a8.75 8.75 0 0 1 3.824-3.824C9.649 3 12.1 3 17 3h14c4.9 0 7.35 0 9.222.954a8.75 8.75 0 0 1 3.824 3.824C45 9.649 45 12.1 45 17v14c0 4.9 0 7.35-.954 9.222a8.75 8.75 0 0 1-3.824 3.824C38.351 45 35.9 45 31 45H17c-4.9 0-7.35 0-9.222-.954a8.75 8.75 0 0 1-3.824-3.824C3 38.351 3 35.9 3 31V17Z"
    />
    <path
      fill="#F79FEE"
      d="M38.875 21.375c0 8.75-7 15.75-14.875 15.75s-14.875-7-14.875-15.75c0-7.777 8.626-11.822 14-5.535l.438 1.16h.875s.403-1.16.437-1.16c5.374-6.287 14-2.242 14 5.535Z"
    />
    <path
      fill="#7845F5"
      fillRule="evenodd"
      d="M18.531 21.243a5.469 5.469 0 0 0 10.938 0h3.062a8.531 8.531 0 0 1-17.062 0h3.062Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBadooIcon;
