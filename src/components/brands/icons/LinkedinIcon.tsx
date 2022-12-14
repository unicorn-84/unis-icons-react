import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2867B2"
      d="M15.163 40H8.529V18.635h6.634V40Zm-3.32-24.28C9.72 15.72 8 13.965 8 11.843a3.842 3.842 0 0 1 7.684 0c0 2.122-1.721 3.879-3.842 3.879ZM39.992 40h-6.62V29.6c0-2.479-.05-5.658-3.449-5.658-3.45 0-3.978 2.693-3.978 5.48V40H19.32V18.635h6.363v2.915h.093c.885-1.679 3.049-3.45 6.277-3.45 6.714 0 7.949 4.421 7.949 10.164V40h-.007Z"
    />
  </svg>
);

export default SvgLinkedinIcon;
