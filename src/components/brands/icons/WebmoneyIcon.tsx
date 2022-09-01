import * as React from 'react';
import { SVGProps } from 'react';

const SvgWebmoneyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#036CB5" />
    <path
      fill="#fff"
      d="M23.929 9c2.34 0 4.567.545 6.565 1.518.314.144.629.316.941.488l-1.37 1.232-2.054-2.149-3.54 3.152-2.084-2.264-6.508 5.874 4.167 4.614-1.627 1.432 4.111 4.614-1.627 1.431 5.881 6.563 3.48-3.21 3.028 3.44c-.6.458-1.257.918-1.97 1.318A14.874 14.874 0 0 1 23.959 39C15.707 39 9 32.268 9 23.987 8.971 15.763 15.68 9 23.93 9Zm-2.741 14.07 3.568-3.21 3.198 3.582-3.57 3.209-3.196-3.581Zm2.541 6.19 3.54-3.239 3.225 3.582-3.568 3.21-3.197-3.554Zm-5.08-12.294 3.567-3.21 3.197 3.583-3.568 3.209-3.196-3.582Zm6.535-1.72 2.655-2.406 2.399 2.665-2.655 2.435-2.399-2.694Zm4.74 11.033 2.653-2.407 2.399 2.692-2.655 2.409-2.398-2.694Zm2.34 5.416 2.655-2.408 2.396 2.665-2.654 2.435-2.397-2.692Zm1.085-12.38 1.77-1.604 1.597 1.777-1.77 1.604-1.597-1.776Zm-2.284-5.3 1.77-1.633 1.599 1.804-1.771 1.605-1.598-1.777Zm4.538 10.602 1.77-1.605L39 24.79l-1.798 1.604-1.599-1.776Zm-7.963-3.983 2.655-2.407 2.397 2.664-2.654 2.408-2.398-2.665Z"
    />
  </svg>
);

export default SvgWebmoneyIcon;
