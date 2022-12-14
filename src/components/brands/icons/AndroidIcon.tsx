import * as React from 'react';
import { SVGProps } from 'react';

const SvgAndroidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#78C257"
      d="M33.207 29.879a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333Zm-18.41 0a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333Zm19.007-10.034 3.329-5.763a.696.696 0 0 0-.497-1.077.696.696 0 0 0-.702.382l-3.371 5.838a20.92 20.92 0 0 0-17.122 0l-3.371-5.838a.695.695 0 1 0-1.2.694l3.33 5.764c-5.717 3.11-9.626 8.896-10.198 15.733h40c-.573-6.837-4.482-12.624-10.198-15.733"
    />
  </svg>
);

export default SvgAndroidIcon;
