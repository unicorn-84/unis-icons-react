import * as React from 'react';
import { SVGProps } from 'react';

const SvgYoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="red"
      d="M43.164 14.4a5.026 5.026 0 0 0-3.536-3.559C36.508 10 24 10 24 10s-12.508 0-15.628.841a5.026 5.026 0 0 0-3.536 3.56C4 17.54 4 24.09 4 24.09s0 6.55.836 9.69c.46 1.732 1.815 3.04 3.536 3.503 3.12.841 15.628.841 15.628.841s12.508 0 15.628-.841c1.72-.463 3.076-1.77 3.536-3.503.836-3.14.836-9.69.836-9.69s0-6.55-.836-9.69ZM19.91 30.039V18.143l10.455 5.948-10.455 5.947Z"
    />
  </svg>
);

export default SvgYoutubeIcon;
