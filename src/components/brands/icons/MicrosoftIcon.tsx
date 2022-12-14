import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrosoftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#F25022" d="M6 6h17.107v17.107H6V6Z" />
    <path fill="#7FBA00" d="M24.893 6H42v17.107H24.893V6Z" />
    <path fill="#00A4EF" d="M6 24.893h17.107V42H6V24.893Z" />
    <path fill="#FFB900" d="M24.893 24.893H42V42H24.893V24.893Z" />
  </svg>
);

export default SvgMicrosoftIcon;
