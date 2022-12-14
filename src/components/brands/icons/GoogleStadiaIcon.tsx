import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleStadiaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#google-stadia-icon_svg__a)"
      d="M4.333 18.447a.804.804 0 0 0-.333.65v.007a.81.81 0 0 0 .067.317L7.9 28.1c.167.38.6.567 1 .427 2.507-.893 11.188-3.72 16.809-2.2 0 0-5.634.333-10.735 4.327a.799.799 0 0 0-.233.953c.413.934 1.243 2.814 1.713 3.874l.66 1.55c.157.367.66.407.88.074 1.19-1.79 3.194-2.684 5.12-3.467a29.282 29.282 0 0 1 6.135-1.747c2.233-.38 4.52-.48 6.78-.28.377.033.727-.2.84-.56l1.734-5.527a.8.8 0 0 0-.3-.884c-1.927-1.4-9.568-6.09-23.002-4.207 0 0 11.468-6.58 26.019.654a.806.806 0 0 0 1.123-.48l1.524-4.874A.918.918 0 0 0 44 15.5v-.02a.79.79 0 0 0-.407-.684c-1.823-1.03-8.007-4.13-16.514-4.13-6.521 0-14.402 1.82-22.746 7.78Z"
    />
    <defs>
      <linearGradient
        id="google-stadia-icon_svg__a"
        x1={4}
        x2={37.162}
        y1={18.074}
        y2={40.182}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4C1D" />
        <stop offset={1} stopColor="#9B0063" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleStadiaIcon;
