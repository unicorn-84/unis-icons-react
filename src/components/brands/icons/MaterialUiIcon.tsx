import * as React from 'react';
import { SVGProps } from 'react';

const SvgMaterialUiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#00B0FF"
      d="M4 25.443V8.123l15 8.66v5.774L9 16.783V28.33l-5-2.887Z"
    />
    <path
      fill="#0081CB"
      d="m19 16.783 15-8.66v17.32l-10 5.774-5-2.887 10-5.773v-5.774l-10 5.774v-5.774Z"
    />
    <path fill="#00B0FF" d="M19 28.33v5.773l10 5.774v-5.774L19 28.33Z" />
    <path
      fill="#0081CB"
      d="m29 39.877 15-8.66V19.67l-5 2.887v5.773l-10 5.773v5.774Zm10-23.094V11.01l5-2.887v5.774l-5 2.886Z"
    />
  </svg>
);

export default SvgMaterialUiIcon;
