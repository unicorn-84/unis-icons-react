import * as React from 'react';
import { SVGProps } from 'react';

const SvgReduxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#764ABC"
      d="M30.944 30.78a2.566 2.566 0 0 0 2.29-2.657 2.573 2.573 0 0 0-2.565-2.474h-.091a2.563 2.563 0 0 0-2.474 2.657c.046.688.32 1.283.733 1.695-1.558 3.07-3.94 5.315-7.513 7.193-2.428 1.283-4.948 1.741-7.468 1.42-2.061-.274-3.664-1.19-4.672-2.703-1.466-2.244-1.604-4.673-.367-7.1.87-1.741 2.245-3.024 3.115-3.666a24.714 24.714 0 0 1-.595-2.336c-6.643 4.81-5.956 11.316-3.94 14.385 1.512 2.29 4.581 3.711 7.971 3.711.917 0 1.833-.092 2.749-.32 5.864-1.146 10.308-4.628 12.827-9.805Zm8.063-5.68c-3.482-4.078-8.612-6.323-14.476-6.323h-.733a2.517 2.517 0 0 0-2.245-1.374h-.092a2.563 2.563 0 0 0-2.474 2.657 2.573 2.573 0 0 0 2.566 2.474h.091a2.58 2.58 0 0 0 2.245-1.558h.825c3.482 0 6.78 1.008 9.758 2.978 2.29 1.512 3.94 3.482 4.856 5.864.778 1.924.733 3.803-.092 5.406-1.283 2.428-3.436 3.757-6.276 3.757-1.833 0-3.573-.55-4.49-.962a27.053 27.053 0 0 1-2.061 1.65c1.97.915 3.986 1.42 5.91 1.42 4.397 0 7.65-2.429 8.887-4.857 1.328-2.657 1.237-7.238-2.199-11.133Zm-23.272 6.46a2.573 2.573 0 0 0 2.565 2.473h.092a2.563 2.563 0 0 0 2.474-2.657 2.573 2.573 0 0 0-2.566-2.474h-.091c-.092 0-.23 0-.321.046-1.878-3.116-2.657-6.506-2.382-10.17.183-2.75 1.1-5.132 2.703-7.102 1.328-1.695 3.894-2.52 5.634-2.565 4.856-.092 6.918 5.955 7.055 8.383.596.138 1.604.459 2.291.688-.55-7.422-5.13-11.27-9.529-11.27-4.123 0-7.925 2.978-9.437 7.376-2.107 5.864-.733 11.499 1.832 15.943-.229.32-.366.824-.32 1.328Z"
    />
  </svg>
);

export default SvgReduxIcon;
