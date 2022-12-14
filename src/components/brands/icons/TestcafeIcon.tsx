import * as React from 'react';
import { SVGProps } from 'react';

const SvgTestcafeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#172535"
      d="m28.828 28.27-1.38 1.423h5.518l5.518 4.98H9.517l5.518-4.98h4.137l-1.379-1.423h-4.138L4 36.809h40l-9.654-8.54h-5.518Z"
    />
    <path
      fill="#1274CC"
      d="m41.098 14.641-3.43-3.45-14.41 14.493-5.49-5.52-3.431 3.45 8.92 8.971 17.841-17.944Z"
    />
  </svg>
);

export default SvgTestcafeIcon;
