import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlfaBankIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#EE2A23" />
    <path
      fill="#fff"
      d="M13.5 34.171c0-.15.144-.274.324-.274h20.348c.184 0 .328.123.328.274v3.056c0 .151-.144.273-.328.273H13.824c-.18 0-.324-.122-.324-.273v-3.056Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24.003 10.5c2.226 0 2.925 1.318 3.512 2.634L33.72 27.16c.047.11.015.29-.188.355-.206.064-3.211 1.028-3.378 1.08-.166.053-.353-.024-.413-.161-.062-.135-1.31-2.986-1.45-3.304h-8.574c-.136.318-1.398 3.175-1.454 3.304-.058.131-.237.22-.415.161-.177-.058-3.194-1.022-3.374-1.08-.173-.056-.252-.218-.192-.355.213-.49 5.91-13.355 6.2-14.026.566-1.296 1.29-2.634 3.52-2.634Zm-2.919 11.453 2.936-7.183 2.908 7.183h-5.844Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAlfaBankIcon;
