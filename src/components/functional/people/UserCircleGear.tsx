import * as React from 'react';
import { SVGProps } from 'react';

const UserCircleGear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.975 24.925a9.001 9.001 0 0 1 16.05 0M25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-4V3.5M23.262 6l-1.287-.75M23.262 8l-1.287.75M25 9v1.5M26.738 8l1.287.75M26.738 6l1.287-.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.913 14.563a12 12 0 1 1-10.8-10.513"
    />
  </svg>
);

export default UserCircleGear;