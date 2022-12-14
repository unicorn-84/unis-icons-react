import * as React from 'react';
import { SVGProps } from 'react';

const SvgCypressIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <mask
      id="cypress-icon_svg__a"
      width={36}
      height={36}
      x={6}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M24 6c9.95 0 18 8.05 18 18s-8.05 18-18 18S6 33.95 6 24 14.05 6 24 6Z"
      />
    </mask>
    <g mask="url(#cypress-icon_svg__a)">
      <g filter="url(#cypress-icon_svg__b)">
        <path
          fill="#000"
          d="M24 6.422c9.716 0 17.578 7.862 17.578 17.578S33.716 41.578 24 41.578 6.422 33.716 6.422 24 14.284 6.422 24 6.422Z"
        />
      </g>
      <path
        fill="#fff"
        d="M24 6.422c9.716 0 17.578 7.862 17.578 17.578S33.716 41.578 24 41.578 6.422 33.716 6.422 24 14.284 6.422 24 6.422Z"
      />
      <path
        fill="#5C5C5E"
        d="M24 7.039c9.375 0 16.961 7.586 16.961 16.961 0 9.375-7.586 16.961-16.961 16.961-9.375 0-16.961-7.586-16.961-16.961 0-9.375 7.586-16.961 16.96-16.961Z"
      />
      <path
        fill="#fff"
        d="M33.005 31.463c-.617 1.912-1.542 3.33-2.837 4.38-1.296 1.048-3.022 1.603-5.181 1.788l-.432-2.837c1.419-.185 2.467-.494 3.146-.987.246-.185.74-.74.74-.74L23.32 16.66h4.256l2.96 12.274 3.146-12.274h4.133l-4.811 14.803ZM18.14 16.105c.987 0 1.912.124 2.652.432a7.97 7.97 0 0 1 2.282 1.357l-1.727 2.344a6.77 6.77 0 0 0-1.419-.802c-.431-.185-.987-.247-1.48-.247-2.097 0-3.146 1.604-3.146 4.873 0 1.665.247 2.837.802 3.515.555.74 1.296 1.049 2.344 1.049.493 0 .987-.062 1.419-.247a12.66 12.66 0 0 0 1.542-.802l1.727 2.467c-1.42 1.172-3.023 1.727-4.873 1.727-1.48 0-2.714-.308-3.824-.925a6.208 6.208 0 0 1-2.467-2.714c-.555-1.172-.864-2.528-.864-4.132 0-1.542.309-2.96.864-4.132.555-1.234 1.418-2.16 2.467-2.838a7.823 7.823 0 0 1 3.7-.925Z"
      />
    </g>
    <defs>
      <filter
        id="cypress-icon_svg__b"
        width={43.156}
        height={43.156}
        x={2.422}
        y={2.422}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_2586" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_2586"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCypressIcon;
