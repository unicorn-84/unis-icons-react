import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebookMessengerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#facebook-messenger-icon_svg__a)"
      d="M24 4C12.736 4 4.002 12.254 4.002 23.398c0 5.83 2.39 10.87 6.28 14.349.324.29.524.7.534 1.14l.11 3.56a1.599 1.599 0 0 0 2.245 1.414l3.97-1.75c.335-.15.715-.174 1.07-.08 1.824.5 3.764.77 5.79.77 11.263 0 19.997-8.254 19.997-19.398S35.264 4 24 4Z"
    />
    <path
      fill="#fff"
      d="m11.991 29.073 5.875-9.32a3.001 3.001 0 0 1 4.34-.8l4.674 3.505a1.2 1.2 0 0 0 1.445-.005l6.309-4.79c.84-.64 1.94.37 1.38 1.266l-5.88 9.314a3.001 3.001 0 0 1-4.34.8l-4.674-3.505a1.2 1.2 0 0 0-1.445.005l-6.31 4.79c-.84.64-1.939-.365-1.374-1.26Z"
    />
    <defs>
      <radialGradient
        id="facebook-messenger-icon_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(11.701 43.779) scale(43.5801)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09F" />
        <stop offset={0.61} stopColor="#A033FF" />
        <stop offset={0.935} stopColor="#FF5280" />
        <stop offset={1} stopColor="#FF7061" />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgFacebookMessengerIcon;
