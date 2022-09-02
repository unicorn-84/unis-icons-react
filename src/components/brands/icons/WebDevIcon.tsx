import * as React from 'react';
import { SVGProps } from 'react';

const SvgWebDevIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#00C9DB"
      d="M37.902 31.205H25.765c-.137 0-.41 0-.546.136l-9.137 7.228c-.136.136-.136.272 0 .409 0 .136.137.136.273.136h21.683c2.182 0 4.092-1.91 3.955-4.227-.136-2.182-2.046-3.682-4.091-3.682Z"
    />
    <path
      fill="#0D55FF"
      d="M28 23.59c-.136-1.09-.682-2.181-1.5-2.863L12.454 9.545c-1.773-1.364-4.228-1.091-5.592.681-1.363 1.773-1.09 4.228.682 5.592L17.772 24 7.544 32.182c-1.773 1.364-2.045 3.819-.682 5.591 1.364 1.773 3.819 2.046 5.592.682L26.5 27c.954-.818 1.5-1.91 1.5-3.136v-.273Z"
    />
    <path
      fill="#7000F2"
      d="M41.993 35.16a3.958 3.958 0 0 1-3.955 3.954 3.958 3.958 0 0 1-3.954-3.955 3.958 3.958 0 0 1 3.954-3.954 3.958 3.958 0 0 1 3.955 3.954Z"
    />
  </svg>
);

export default SvgWebDevIcon;
