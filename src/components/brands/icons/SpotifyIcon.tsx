import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpotifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#1ED760"
      fillRule="evenodd"
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.452-11.599c.57.326 1.298.174 1.64-.368.342-.542.16-1.236-.41-1.562-5.012-2.927-11.253-3.6-18.52-2.017a1.122 1.122 0 0 0-.888 1.345c.136.607.774.976 1.412.846 6.652-1.431 12.278-.846 16.766 1.756Zm1.913-4.836c.706.39 1.618.195 2.05-.477a1.373 1.373 0 0 0-.455-1.93c-5.9-3.448-14.51-4.402-21.436-2.407-.797.217-1.23.997-1.002 1.756.228.738 1.048 1.15 1.845.933 6.06-1.757 13.873-.89 18.998 2.125Zm-19.909-7.742c5.877-1.692 16.014-1.366 22.164 2.104.843.498 1.937.217 2.415-.607.501-.803.228-1.844-.615-2.321-7.062-3.99-18.27-4.38-25.012-2.429-.934.282-1.48 1.236-1.184 2.125.296.911 1.298 1.41 2.232 1.128Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSpotifyIcon;
