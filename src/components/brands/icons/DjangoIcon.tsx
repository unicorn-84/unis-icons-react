import * as React from 'react';
import { SVGProps } from 'react';

const SvgDjangoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#092E20"
      d="M38.063 6H9.936A3.938 3.938 0 0 0 6 9.938v28.124A3.938 3.938 0 0 0 9.938 42h28.124A3.938 3.938 0 0 0 42 38.062V9.939A3.938 3.938 0 0 0 38.062 6Z"
    />
    <path
      fill="#FFFFFD"
      d="M32.21 19.247v9.313c0 3.209-.236 4.748-.94 6.078-.652 1.279-1.513 2.087-3.287 2.974l-3.73-1.774c1.773-.834 2.634-1.565 3.182-2.687.574-1.148.757-2.478.757-5.974v-7.93h4.017Zm-6.392-6.205v18.596c-2.06.392-3.574.548-5.218.548-4.904 0-7.46-2.217-7.46-6.47 0-4.096 2.712-6.756 6.912-6.756.653 0 1.148.052 1.748.208v-6.126h4.018Zm-5.374 9.152c-2.035 0-3.209 1.253-3.209 3.444 0 2.14 1.122 3.313 3.183 3.313.443 0 .809-.026 1.383-.104v-6.444a3.993 3.993 0 0 0-1.357-.209Zm11.765-9.13v4.122h-4.017v-4.122h4.017Z"
    />
  </svg>
);

export default SvgDjangoIcon;
