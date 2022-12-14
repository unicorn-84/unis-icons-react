import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleFacetimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#apple-facetime-icon_svg__a)"
      d="M6 18.8c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C12.08 6 14.32 6 18.8 6h10.4c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C42 12.08 42 14.32 42 18.8v10.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496C35.92 42 33.68 42 29.2 42H18.8c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C6 35.92 6 33.68 6 29.2V18.8Z"
    />
    <path
      fill="#fff"
      d="M11.543 18.23c-.4.761-.4 1.758-.4 3.752v4.036c0 1.994 0 2.99.4 3.752.352.67.914 1.215 1.606 1.556.785.388 1.814.388 3.871.388h6.204c2.058 0 3.087 0 3.872-.388a3.618 3.618 0 0 0 1.606-1.556c.4-.761.4-1.758.4-3.752v-4.036c0-1.994 0-2.99-.4-3.752a3.619 3.619 0 0 0-1.606-1.556c-.785-.388-1.814-.388-3.872-.388H17.02c-2.057 0-3.086 0-3.871.388a3.619 3.619 0 0 0-1.606 1.556Zm18.959 2.427 4.009-3.256c.93-.756 2.346-.115 2.346 1.06v11.11c0 1.17-1.405 1.813-2.337 1.07l-4.007-3.2a1.564 1.564 0 0 1-.595-1.22v-4.35c0-.469.214-.913.584-1.213Z"
    />
    <defs>
      <linearGradient
        id="apple-facetime-icon_svg__a"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#61F677" />
        <stop offset={1} stopColor="#10BC2B" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleFacetimeIcon;
