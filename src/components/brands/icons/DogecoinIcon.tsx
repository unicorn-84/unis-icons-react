import * as React from 'react';
import { SVGProps } from 'react';

const SvgDogecoinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#C2A633"
      d="M21.86 17.862h2.572c.962 0 5.801.387 5.81 6.364.007 5.907-4.873 5.9-5.657 5.9H21.86v-5.07h4.046v-2.124H21.86v-5.07Z"
    />
    <path
      fill="#C2A633"
      fillRule="evenodd"
      d="M6 24c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18S6 33.941 6 24Zm12.189 9.722h6.518s9.166.768 9.166-9.566c0-9.933-8.37-9.897-9.988-9.89h-5.697v8.667h-2.297v2.122h2.298v8.667Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDogecoinIcon;
