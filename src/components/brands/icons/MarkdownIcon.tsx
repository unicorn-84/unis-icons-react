import * as React from 'react';
import { SVGProps } from 'react';

const SvgMarkdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#000"
      d="M41.245 36.335H6.876C5.316 36.335 4 35.018 4 33.461V14.54c0-1.557 1.317-2.874 2.874-2.874h34.252c1.557 0 2.874 1.317 2.874 2.874v18.92c0 1.557-1.198 2.874-2.755 2.874ZM6.876 13.581c-.48 0-.959.479-.959.958V33.46c0 .599.48.958.958.958h34.252c.599 0 .958-.479.958-.958V14.54c0-.599-.48-.958-.958-.958H6.874Zm2.873 17.006V17.413h3.833l3.832 4.79 3.832-4.79h3.833v13.174h-3.832v-7.545l-3.833 4.79-3.832-4.79v7.545H9.749Zm24.072 0-5.748-6.348h3.832v-6.826h3.832v6.707h3.833l-5.749 6.467Z"
    />
  </svg>
);

export default SvgMarkdownIcon;
