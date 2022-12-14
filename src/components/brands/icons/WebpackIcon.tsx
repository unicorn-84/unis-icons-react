import * as React from 'react';
import { SVGProps } from 'react';

const SvgWebpackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#fff"
      d="m24 6 15.908 8.998v18.004L24 42 8.092 33.002V14.997L24 6Z"
    />
    <path
      fill="#8ED6FB"
      d="m37.068 32.377-12.54 7.102v-5.523l7.816-4.304 4.724 2.725Zm.859-.774v-14.84l-4.586 2.648v9.544l4.586 2.648Zm-27.044.774 12.54 7.096V33.95l-7.815-4.298-4.725 2.725Zm-.858-.774v-14.84l4.586 2.648v9.544l-4.586 2.648Zm.534-15.8 12.865-7.276v5.343l-8.242 4.532-.067.036-4.556-2.635Zm26.828 0L24.528 8.527v5.343l8.236 4.538.066.036 4.557-2.641Z"
    />
    <path
      fill="#1C78C0"
      d="m23.424 32.695-7.708-4.244v-8.398l7.708 4.448v8.194Zm1.104 0 7.708-4.238v-8.404l-7.708 4.448v8.194Zm-8.296-13.614 7.744-4.256 7.738 4.256-7.738 4.466-7.744-4.466Z"
    />
  </svg>
);

export default SvgWebpackIcon;
