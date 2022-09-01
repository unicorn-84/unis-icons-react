import * as React from 'react';
import { SVGProps } from 'react';

const CoinVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#coin-vertical_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M13 28c3.866 0 7-5.373 7-12S16.866 4 13 4 6 9.373 6 16s3.134 12 7 12Z" />
      <path d="M13 4h6c3.863 0 7 5.375 7 12s-3.137 12-7 12h-6m5.212-20h6M20 16h6m-7.788 8h6" />
    </g>
    <defs>
      <clipPath id="coin-vertical_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CoinVertical;