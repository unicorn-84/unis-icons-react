import * as React from 'react';
import { SVGProps } from 'react';

const SvgAmexCardLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 119 86"
    {...props}
  >
    <g clipPath="url(#amex-card-logo_svg__a)">
      <path
        fill="#26A6D1"
        d="M7.39.4h103.475a7.394 7.394 0 0 1 7.391 7.395v70.214a7.393 7.393 0 0 1-7.391 7.391H7.391A7.39 7.39 0 0 1 0 78.01V7.795A7.394 7.394 0 0 1 7.39.4Z"
      />
      <path
        fill="#fff"
        d="M19.069 29.964 7.39 55.807h13.98l1.733-4.12h3.962l1.733 4.12h15.388v-3.145l1.371 3.145h7.96l1.371-3.212v3.212h32.003l3.892-4.014 3.644 4.014 16.437.033L99.15 42.958l11.715-12.994H94.683l-3.789 3.94-3.529-3.94H52.55l-2.99 6.67-3.06-6.67H32.55v3.038l-1.552-3.038h-11.93Zm2.705 3.67h6.814l7.746 17.524V33.634H43.8l5.983 12.565 5.514-12.565h7.428v18.544h-4.52l-.037-14.531-6.589 14.53h-4.043l-6.626-14.53v14.53h-9.298L29.85 48.02h-9.524l-1.759 4.154h-4.981l8.189-18.54Zm45.085 0h18.378l5.62 6.071 5.803-6.071h5.621l-8.54 9.32 8.54 9.213h-5.876l-5.621-6.142-5.832 6.142H66.86V33.634Zm-41.77 3.137-3.138 7.406h6.272l-3.134-7.406Zm46.308.702v3.386h10.026v3.773H71.397v3.695h11.246l5.225-5.443-5.004-5.414H71.397v.003Z"
      />
    </g>
    <defs>
      <clipPath id="amex-card-logo_svg__a">
        <path fill="#fff" d="M0 0h118.256v85H0z" transform="translate(0 .4)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAmexCardLogo;
