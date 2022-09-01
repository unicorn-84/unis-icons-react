import * as React from 'react';
import { SVGProps } from 'react';

const SvgProductHuntIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#D85637" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16.5 13.5H27a7.5 7.5 0 0 1 0 15h-6v6h-4.5v-21ZM21 24v-6h6a3 3 0 1 1 0 6h-6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgProductHuntIcon;
