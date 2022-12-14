import * as React from 'react';
import { SVGProps } from 'react';

const SvgDropboxAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width={48} height={48} fill="#0F287F" rx={24} />
    <path
      fill="#DAF8FE"
      fillRule="evenodd"
      d="m40 15.072-6.509 5.15L24 14.432 30.587 9 40 15.072ZM17.413 9 24 14.431l-9.491 5.79L8 15.073 17.413 9ZM24 26.012l-6.587 5.432L8 25.37l6.509-5.15 9.49 5.79Zm0 0 9.491-5.79L40 25.372l-9.413 6.072L24 26.012Zm6.625 6.584L24.02 27.18l-6.606 5.416-2.827-1.823v2.044l9.433 5.589 9.433-5.59v-2.043l-2.827 1.823Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDropboxAltIcon;
