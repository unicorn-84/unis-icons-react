import * as React from 'react';
import { SVGProps } from 'react';

const SvgStackoverflowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#BCBBBB"
      d="M34.497 38.8v-9.645h3.2V42H8.806V29.155h3.201v9.644h22.49Z"
    />
    <path
      fill="#F48023"
      d="m15.54 28.24 15.714 3.284.665-3.16-15.713-3.283-.666 3.16Zm2.079-7.482 14.55 6.776 1.33-2.91-14.55-6.818-1.33 2.951Zm4.032-7.15 12.347 10.267 2.037-2.452-12.347-10.268-2.037 2.452ZM29.633 6l-2.578 1.912L36.617 20.8l2.577-1.912L29.633 6ZM15.208 35.557h16.046v-3.201H15.208v3.2Z"
    />
  </svg>
);

export default SvgStackoverflowIcon;
