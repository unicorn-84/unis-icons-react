import * as React from 'react';
import { SVGProps } from 'react';

const SvgTerraformIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#4040B2" d="m30 29.388 9.84-5.676v-11.37L30 18.03v11.358Z" />
    <path
      fill="#5C4EE5"
      d="m19.08 12.342 9.84 5.688v11.358l-9.84-5.682V12.342ZM8.16 17.364 18 23.046V11.682L8.16 6v11.364Zm10.92 18.954L28.92 42V30.636l-9.84-5.682"
    />
  </svg>
);

export default SvgTerraformIcon;
