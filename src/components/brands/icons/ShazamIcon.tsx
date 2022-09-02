import * as React from 'react';
import { SVGProps } from 'react';

const SvgShazamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="url(#shazam-icon_svg__a)"
      d="M3 23.997c0 11.596 9.403 21 21 21 11.598 0 21-9.404 21-21 0-11.6-9.402-21-21-21-11.597 0-21 9.4-21 21Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M29.469 37.688c.55-.53 3.782-3.642 5.64-5.692 1.771-1.958 2.662-4.479 2.502-7.092-.164-2.691-1.42-5.184-3.54-7.014-3.499-3.026-9.155-2.965-12.607.134-1.26 1.129-2.682 2.677-2.743 2.743a2.43 2.43 0 0 0 .144 3.432 2.43 2.43 0 0 0 3.43-.145c.013-.014 1.325-1.442 2.407-2.412 1.818-1.631 4.725-1.349 6.197-.076 1.121.968 1.784 2.258 1.868 3.632a4.8 4.8 0 0 1-1.254 3.534c-1.752 1.935-4.976 5.038-5.422 5.467l-.051.05a2.43 2.43 0 0 0 1.678 4.183 2.422 2.422 0 0 0 1.75-.744Zm-15.245-7.752c1.722 1.49 3.966 2.233 6.212 2.233 2.32 0 4.643-.792 6.396-2.366 1.155-1.038 2.45-2.426 2.701-2.696l.042-.044a2.43 2.43 0 0 0-.145-3.432 2.423 2.423 0 0 0-3.434.15c-.104.112-1.36 1.47-2.402 2.406-1.818 1.629-4.724 1.35-6.198.075-1.12-.969-1.782-2.26-1.867-3.635a4.807 4.807 0 0 1 1.254-3.533c1.877-2.07 5.437-5.48 5.473-5.514a2.43 2.43 0 0 0 .077-3.434 2.424 2.424 0 0 0-3.43-.078l-.016.015c-.3.288-3.753 3.6-5.698 5.75a9.627 9.627 0 0 0-2.505 7.09c.166 2.693 1.422 5.183 3.54 7.014Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="shazam-icon_svg__a"
        x1={3}
        x2={3}
        y1={44.997}
        y2={2.997}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#25F" />
        <stop offset={1} stopColor="#0AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgShazamIcon;
