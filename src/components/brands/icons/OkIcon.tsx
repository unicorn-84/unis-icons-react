import * as React from 'react';
import { SVGProps } from 'react';

const SvgOkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#EE8208"
      fillRule="evenodd"
      d="M3 24C3 12.402 12.402 3 24 3s21 9.402 21 21-9.402 21-21 21S3 35.598 3 24Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M30.666 18.194c0 3.414-2.996 6.191-6.683 6.191-3.686 0-6.683-2.777-6.683-6.191 0-3.416 2.997-6.194 6.683-6.194 3.687 0 6.683 2.778 6.683 6.194Zm-3.916 0c0-1.415-1.241-2.564-2.767-2.564-1.525 0-2.767 1.15-2.767 2.564 0 1.413 1.242 2.563 2.767 2.563 1.526 0 2.767-1.15 2.767-2.563Zm-.046 11.246a13.088 13.088 0 0 0 3.881-1.489c.915-.534 1.19-1.655.614-2.502-.576-.85-1.784-1.105-2.7-.57-2.738 1.595-6.262 1.594-8.998 0-.917-.535-2.125-.28-2.7.57-.576.848-.301 1.968.613 2.502a13.107 13.107 0 0 0 3.881 1.49l-3.736 3.462a1.722 1.722 0 0 0 0 2.566c.383.353.884.53 1.385.53s1.003-.177 1.385-.53L24 32.066l3.674 3.403c.763.708 2.003.708 2.767 0a1.72 1.72 0 0 0 0-2.566l-3.736-3.463Z"
    />
  </svg>
);

export default SvgOkIcon;
