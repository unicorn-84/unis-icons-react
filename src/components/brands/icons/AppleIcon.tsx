import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#000"
      d="M33.037 24.91c-.014-2.622 1.172-4.6 3.572-6.058-1.343-1.922-3.372-2.98-6.05-3.186-2.537-.2-5.309 1.479-6.323 1.479-1.072 0-3.53-1.408-5.458-1.408-3.987.064-8.223 3.18-8.223 9.516 0 1.872.343 3.806 1.028 5.801.915 2.622 4.216 9.052 7.659 8.945 1.8-.043 3.072-1.28 5.415-1.28 2.272 0 3.45 1.28 5.458 1.28 3.472-.05 6.459-5.894 7.33-8.523-4.658-2.194-4.408-6.43-4.408-6.566Zm-4.043-11.73c1.95-2.315 1.771-4.423 1.714-5.18-1.721.1-3.715 1.172-4.85 2.493-1.25 1.415-1.987 3.165-1.83 5.137 1.865.143 3.566-.815 4.966-2.45Z"
    />
  </svg>
);

export default SvgAppleIcon;
