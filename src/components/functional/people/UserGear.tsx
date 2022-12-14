import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserGear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13.5 20a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.775 25a14 14 0 0 1 21.45 0m3.275-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-4v-1.5M25.762 16l-1.287-.75M25.762 18l-1.287.75M27.5 19v1.5m1.738-2.5 1.287.75M29.238 16l1.287-.75"
    />
  </svg>
);

export default SvgUserGear;
