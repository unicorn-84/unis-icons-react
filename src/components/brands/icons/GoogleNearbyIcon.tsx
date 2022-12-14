import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleNearbyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={18} fill="#2E8DF7" />
    <path
      fill="#FFF8FF"
      d="m37.107 21.843-10.95-10.95a3.051 3.051 0 0 0-4.314 0l-10.95 10.95a3.051 3.051 0 0 0 0 4.314l10.95 10.95a3.051 3.051 0 0 0 4.314 0l10.95-10.95a3.051 3.051 0 0 0 0-4.314ZM24 33.803 14.197 24 24 14.197 33.802 24 24 33.802ZM30.302 24 24 30.302 17.698 24 24 17.698 30.302 24Z"
    />
  </svg>
);

export default SvgGoogleNearbyIcon;
