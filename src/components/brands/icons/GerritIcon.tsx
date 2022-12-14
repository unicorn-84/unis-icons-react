import * as React from 'react';
import { SVGProps } from 'react';

const SvgGerritIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FAA"
      d="M30.923 6H8.77A2.77 2.77 0 0 0 6 8.77v22.153a2.77 2.77 0 0 0 2.77 2.77h22.153a2.77 2.77 0 0 0 2.77-2.77V8.77A2.77 2.77 0 0 0 30.922 6Z"
    />
    <path
      fill="#AFA"
      d="M39.23 14.308H17.078a2.77 2.77 0 0 0-2.77 2.769V39.23a2.77 2.77 0 0 0 2.77 2.77H39.23A2.77 2.77 0 0 0 42 39.23V17.078a2.77 2.77 0 0 0-2.77-2.77Z"
    />
    <path
      fill="red"
      d="M18.462 21.23h8.307V24h-8.307v-2.77Zm11.076 0h8.308V24H29.54v-2.77Z"
    />
    <path
      fill="green"
      d="M18.462 30.923h2.769v-2.77H24v2.77h2.77v2.77H24v2.769h-2.77v-2.77h-2.768v-2.769Zm11.076 0h2.77v-2.77h2.769v2.77h2.77v2.77h-2.77v2.769h-2.77v-2.77h-2.769v-2.769Z"
    />
  </svg>
);

export default SvgGerritIcon;
