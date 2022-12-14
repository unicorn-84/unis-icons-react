import * as React from 'react';
import { SVGProps } from 'react';

const SvgTinderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#tinder-icon_svg__a)"
      d="M24 3C12.417 3 3 12.417 3 24s9.417 21 21 21 21-9.417 21-21S35.583 3 24 3Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.793 21.69a.068.068 0 0 1-.074-.02c-.817-1.075-1.022-2.922-1.072-3.631-.01-.137-.164-.214-.288-.145-2.52 1.407-4.859 4.737-4.859 7.951C13.5 31.367 17.358 36 24 36c6.223 0 10.5-4.775 10.5-10.154 0-7.04-5.06-11.716-9.567-13.83-.105-.05-.245.052-.23.167.58 3.793-.221 7.919-4.91 9.507Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="tinder-icon_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(24 45) scale(44.8699)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7854" />
        <stop offset={1} stopColor="#FD267D" />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgTinderIcon;
