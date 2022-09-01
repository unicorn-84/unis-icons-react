import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleCurrentsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#174EA6"
      d="m22.306 17.813 7.202 16.055 4.51-9.91 1.617 2.754 1.203 3.439-3.121 6.823C32.859 38.87 31.285 40 29.507 40c-1.76 0-3.321-1.11-4.186-2.971l-.026-.057-3.08-6.796-2.703-6.173 2.794-6.19Zm-5.598-6.722c1.588 0 2.987.982 3.751 2.63l.025.055 1.822 4.037-2.794 6.19-2.804-6.214-2.831 6.23-1.088 3.563-1.699 2.571-2.772-6.218 4.613-10.16c.759-1.68 2.17-2.684 3.777-2.684Z"
    />
    <path
      fill="#4285F4"
      d="M33.734 11.02C32.879 9.13 31.315 8 29.547 8c-1.768 0-3.334 1.13-4.187 3.022L16.709 30.22 13.9 23.973l-2.809 6.181 1.84 4.08c.759 1.68 2.17 2.684 3.777 2.684 1.606 0 3.017-1.004 3.776-2.685l9.063-20.113 7.287 16.058 2.848-6.244-5.948-12.914Z"
    />
  </svg>
);

export default SvgGoogleCurrentsIcon;
