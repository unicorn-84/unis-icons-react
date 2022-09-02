import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleTvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M14.78 17.305c-.683.817-1.8 1.467-2.883 1.383-.166-1.116.384-2.283 1.017-3.016.716-.817 1.9-1.417 2.883-1.466.116 1.133-.35 2.282-1.017 3.1Zm11.87 14.006c.233.3.667.45 1.25.45.35 0 .833-.066 1.466-.2v1.884c-.833.233-1.7.35-2.583.35-2.05 0-3.066-1.167-3.066-3.483V20.08H21.95v-1.867h1.866v-2.416l2.466-1v3.433h2.833v1.866H26.3v9.666c0 .75.117 1.25.35 1.55Zm8.602 2.242-5.566-15.331h2.717l3.366 9.965c.133.4.466 1.516.983 3.366l.5-1.666.55-1.683 3.483-9.999H44l-5.716 15.348h-3.033Zm-16.772-2.3c-.8 1.183-1.65 2.35-2.983 2.383-1.3.033-1.716-.766-3.216-.766-1.483 0-1.95.733-3.183.8-1.267.033-2.233-1.3-3.066-2.484-1.65-2.416-2.933-6.815-1.217-9.798.85-1.483 2.383-2.417 4.033-2.433 1.25-.017 2.433.866 3.216.866.767 0 2.2-1.05 3.716-.9.634.034 2.417.267 3.567 1.917-.1.066-2.134 1.25-2.117 3.7.017 2.949 2.583 3.932 2.6 3.949-.017.067-.417 1.4-1.35 2.766Z"
    />
  </svg>
);

export default SvgAppleTvIcon;
