import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleMusicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <ellipse
      cx={24}
      cy={24.023}
      fill="url(#apple-music-icon_svg__a)"
      rx={19.142}
      ry={19.165}
    />
    <path
      fill="url(#apple-music-icon_svg__b)"
      d="m19.733 12.766 12.611-2.507a.93.93 0 0 1 1.11.912v19.323a3.485 3.485 0 0 1-2.759 3.408l-1.114.237a3.12 3.12 0 0 1-3.77-3.051c0-1.398.943-2.62 2.295-2.976l3.158-.831a.976.976 0 0 0 .727-.944v-8.971a.65.65 0 0 0-.783-.637l-10.51 2.184a.697.697 0 0 0-.554.683v13.397a3.81 3.81 0 0 1-3.02 3.727l-.763.162a3.215 3.215 0 0 1-3.883-3.145c0-1.303.877-2.443 2.136-2.777l3.306-.876a.93.93 0 0 0 .69-.898V14.133c0-.665.47-1.237 1.123-1.367Z"
    />
    <path
      fill="url(#apple-music-icon_svg__c)"
      fillRule="evenodd"
      d="M45 24c0 11.598-9.402 21-21 21S3 35.598 3 24 12.402 3 24 3s21 9.402 21 21Zm-1.858.023c0 10.585-8.57 19.165-19.142 19.165S4.858 34.608 4.858 24.023C4.858 13.44 13.428 4.858 24 4.858s19.142 8.58 19.142 19.165Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="apple-music-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(24.01996 -34.47346 27.0717 18.86266 12.478 41.608)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A66FB" />
        <stop offset={0.44} stopColor="#52A2F4" />
        <stop offset={0.702} stopColor="#FC5D6D" />
        <stop offset={1} stopColor="#E85E7B" />
      </radialGradient>
      <radialGradient
        id="apple-music-icon_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(24.01996 -34.47346 27.0717 18.86266 12.478 41.608)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A66FB" />
        <stop offset={0.44} stopColor="#52A2F4" />
        <stop offset={0.702} stopColor="#FC5D6D" />
        <stop offset={1} stopColor="#E85E7B" />
      </radialGradient>
      <linearGradient
        id="apple-music-icon_svg__a"
        x1={24}
        x2={24}
        y1={4.858}
        y2={43.188}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#DDE2E7" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleMusicIcon;
