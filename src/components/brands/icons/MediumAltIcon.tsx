import * as React from 'react';
import { SVGProps } from 'react';

const SvgMediumAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={21} fill="#12100E" />
    <path
      fill="#fff"
      d="m13.078 30-3.422 4.36v.492h8.438v-.493L14.695 30V18.75l7.29 16.102h1.03L29.25 18.75v13.219l-2.555 2.39v.493h11.18v-.493l-2.484-2.39v-16.64l2.484-2.321v-.563h-7.71L24.538 26.25l-6.281-13.805h-8.203v.563l3.023 3.586V30Z"
    />
  </svg>
);

export default SvgMediumAltIcon;
