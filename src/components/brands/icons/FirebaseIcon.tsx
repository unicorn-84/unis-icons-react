import * as React from 'react';
import { SVGProps } from 'react';

const SvgFirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FFA000"
      d="m9.46 36.274 4.924-31.505a.91.91 0 0 1 1.7-.288l5.092 9.496 2.03-3.864a.91.91 0 0 1 1.609 0l13.74 26.16H9.46Z"
    />
    <path
      fill="#F57C00"
      d="m26.47 24.002-5.297-10.03L9.46 36.275l17.01-12.272Z"
    />
    <path
      fill="#FFCA28"
      d="m38.555 36.274-3.77-23.335a.91.91 0 0 0-1.54-.492L9.46 36.273l13.161 7.38a2.727 2.727 0 0 0 2.66 0l13.274-7.38Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.2}
      d="M34.784 12.939a.91.91 0 0 0-1.538-.492l-4.721 4.733-3.712-7.067a.91.91 0 0 0-1.61 0l-2.03 3.864-5.091-9.496a.91.91 0 0 0-1.7.29L9.46 36.275h-.015l.015.018.13.063L33.239 12.68a.91.91 0 0 1 1.54.49l3.74 23.126.036-.022-3.77-23.335ZM9.504 36.23l4.88-31.236a.91.91 0 0 1 1.7-.29l5.092 9.496 2.03-3.864a.91.91 0 0 1 1.609 0l3.636 6.917L9.503 36.23Z"
    />
    <path
      fill="#A52714"
      d="M25.28 43.431a2.728 2.728 0 0 1-2.659 0l-13.129-7.36-.032.203 13.161 7.378a2.728 2.728 0 0 0 2.66 0l13.274-7.378-.034-.21-13.24 7.368Z"
      opacity={0.2}
    />
    <path
      fill="url(#firebase-icon_svg__a)"
      d="M34.747 12.944a.904.904 0 0 0-1.533-.49l-4.705 4.73-3.7-7.065a.906.906 0 0 0-1.603 0l-2.023 3.863-5.073-9.493a.905.905 0 0 0-1.695.291L9.511 36.268l13.115 7.375a2.711 2.711 0 0 0 2.65 0l13.228-7.375-3.757-23.325Z"
    />
    <defs>
      <linearGradient
        id="firebase-icon_svg__a"
        x1={8.499}
        x2={44.68}
        y1={10.814}
        y2={29.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.1} />
        <stop offset={0.14} stopColor="#fff" stopOpacity={0.08} />
        <stop offset={0.61} stopColor="#fff" stopOpacity={0.02} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFirebaseIcon;
