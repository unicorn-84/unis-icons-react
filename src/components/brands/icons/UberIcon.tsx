import * as React from 'react';
import { SVGProps } from 'react';

const SvgUberIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#000"
      d="M39.283 6H8.725A2.727 2.727 0 0 0 6 8.724v30.544A2.728 2.728 0 0 0 8.725 42h30.55A2.727 2.727 0 0 0 42 39.276V8.724A2.715 2.715 0 0 0 39.283 6ZM25.097 34.856c-5.996.603-11.349-3.769-11.952-9.763h7.588v1.64c0 .296.24.546.546.546h5.458a.547.547 0 0 0 .546-.547v-5.456a.547.547 0 0 0-.546-.546h-5.458a.547.547 0 0 0-.546.546v1.64h-7.588a10.915 10.915 0 0 1 21.718 0c.602 5.986-3.77 11.338-9.766 11.94Z"
    />
  </svg>
);

export default SvgUberIcon;
