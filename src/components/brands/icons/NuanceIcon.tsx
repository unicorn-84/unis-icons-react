import * as React from 'react';
import { SVGProps } from 'react';

const SvgNuanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#4E6994"
      fillRule="evenodd"
      d="M32.53 29.735c-2.795-.147-5.295-1.03-7.648-2.353-2.5-1.323-3.676-2.206-3.823-2.352v.588c-.147.147.588 1.03 1.912 2.647 1.323 1.617 3.382 3.235 6.03 4.853 2.646 1.618 5.881 2.5 9.852 2.647h3.676c.882-.147 1.324-.588 1.471-1.324v-9.706c-.147-.882-.589-1.323-1.471-1.47h-10v6.47Zm-5.443-6.764v-.442l-2.205-2.647c-1.324-1.617-3.235-3.382-5.882-5-2.795-1.617-6.03-2.5-9.853-2.647H5.47c-.883.147-1.324.589-1.471 1.324v9.706c.147.882.588 1.323 1.47 1.47h10v-6.47c2.795.146 5.295 1.03 7.647 2.353l3.97 2.353Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgNuanceIcon;
