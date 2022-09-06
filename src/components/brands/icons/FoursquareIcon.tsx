import * as React from 'react';
import { SVGProps } from 'react';

const SvgFoursquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FA4778"
      d="M32.651 8H15.572c-2.346 0-3.04 1.773-3.04 2.88v27.118c0 1.254.667 1.734 1.054 1.88.373.16 1.426.28 2.053-.44 0 0 8.053-9.346 8.2-9.492.213-.2.213-.2.413-.2h5.213c2.2 0 2.546-1.56 2.786-2.48.2-.76 2.334-11.706 3.04-15.186.547-2.64-.133-4.08-2.64-4.08Zm-15.554 3.52H30.79c.507 0 .973.48.84 1.093v.013l-.707 3.72c-.093.414-.6.84-1.066.84h-6.64c-.76 0-1.293.52-1.293 1.253v.827c0 .76.547 1.28 1.293 1.28h5.64c.52 0 1.04.573.933 1.133l-.72 3.68c-.067.32-.413.84-1.04.84h-4.613c-.84 0-1.093.12-1.653.8-.56.707-5.613 6.76-5.613 6.76-.04.066-.094.04-.094-.014V12.56c0-.48.414-1.04 1.04-1.04Z"
    />
  </svg>
);

export default SvgFoursquareIcon;
