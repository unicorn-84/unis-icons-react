import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebookLiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1877F2"
      d="M14.002 24.012h-1.934v-1.317c0-.55.267-1.1 1.15-1.1h.867v-1.7s-.8-.15-1.55-.15c-1.6 0-2.634.983-2.634 2.733v1.534H8.117v2.017h1.784v4.884A6.98 6.98 0 0 1 4 24.012a6.983 6.983 0 0 1 6.985-6.985 6.983 6.983 0 0 1 6.984 6.985 6.98 6.98 0 0 1-5.9 6.901V26.03h1.616l.317-2.017ZM44 17.782v12.436c0 .2-.067.4-.217.533a.785.785 0 0 1-.55.234H19.796a.72.72 0 0 1-.534-.234.756.756 0 0 1-.233-.55V17.782c0-.2.083-.4.233-.533a.72.72 0 0 1 .534-.234h23.437c.2 0 .4.084.55.234.15.133.217.333.217.533Zm-16.155 9.176h1.067V21.04h-1.067v5.918Zm-4.91 0h3.767v-.933h-2.7V21.04h-1.067v5.918Zm9.05 0h1.217l2.05-5.918H34.12l-1.467 4.684h-.083l-1.484-4.684h-1.167l2.067 5.918Zm7.968-3.43h-2.617v-1.567h2.767v-.917H36.27v5.918h3.834v-.917h-2.767v-1.667h2.617v-.85Z"
    />
  </svg>
);

export default SvgFacebookLiveIcon;
