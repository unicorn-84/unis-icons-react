import * as React from 'react';
import { SVGProps } from 'react';

const SvgAmwellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#amwell-icon_svg__a)"
      fillRule="evenodd"
      d="M24.044 40.97a1.64 1.64 0 0 1-1.155-.474l-4.627-4.563a1.646 1.646 0 1 1 2.31-2.346l3.476 3.428L36.38 24.943c3.136-3.358 3.128-8.8-.022-12.148-1.305-1.387-2.956-2.226-4.776-2.426-2.357-.26-4.686.615-6.38 2.4a1.645 1.645 0 0 1-2.387 0c-1.377-1.452-3.195-2.315-5.117-2.431-2.24-.138-4.442.76-6.038 2.456-2.138 2.272-2.901 5.6-1.992 8.682a1.646 1.646 0 1 1-3.156.933c-1.24-4.202-.185-8.751 2.752-11.872 2.267-2.41 5.422-3.684 8.632-3.486 2.228.134 4.349.96 6.112 2.357 2.257-1.793 5.071-2.629 7.934-2.312 2.57.282 4.99 1.504 6.812 3.441 4.33 4.6 4.33 12.086 0 16.687a5.336 5.336 0 0 1-.047.048L25.196 40.5c-.321.313-.737.47-1.152.47Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.622 32.461c-.467 0-.933-.175-1.293-.525L9.986 27.7a1.853 1.853 0 1 1 2.586-2.656l3.047 2.971 10.535-10.327a1.854 1.854 0 0 1 2.593 2.648L16.919 31.932c-.36.353-.829.53-1.297.53Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="amwell-icon_svg__a"
        x1={24}
        x2={24}
        y1={40.511}
        y2={7.03}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF9C23" />
        <stop offset={0.283} stopColor="#F3AD30" />
        <stop offset={0.511} stopColor="#F5B838" />
        <stop offset={1} stopColor="#FCD54E" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAmwellIcon;
