import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleSheetsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#0F9D58"
      d="M27.272 6H13.367a2.466 2.466 0 0 0-2.454 2.46v31.086A2.46 2.46 0 0 0 13.367 42H34.63a2.46 2.46 0 0 0 2.454-2.454V15.821l-5.729-4.09L27.272 6Z"
    />
    <path
      fill="#F1F1F1"
      d="M17.458 23.59v11.865h13.09V23.59h-13.09Zm5.723 10.227H19.09v-2.045h4.09v2.045Zm0-3.276H19.09v-2.045h4.09v2.045Zm0-3.268H19.09v-2.046h4.09v2.046Zm5.729 6.544h-4.091v-2.045h4.09v2.045Zm0-3.276h-4.091v-2.045h4.09v2.045Zm0-3.268h-4.091v-2.046h4.09v2.046Z"
    />
    <path
      fill="url(#google-sheets-icon_svg__a)"
      d="m27.989 15.104 9.096 9.097v-8.38l-9.096-.717Z"
    />
    <path
      fill="#87CEAC"
      d="M27.274 6.004v7.36a2.452 2.452 0 0 0 2.453 2.454h7.36l-9.813-9.814Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.2}
      d="M13.367 6a2.466 2.466 0 0 0-2.454 2.46v.205a2.46 2.46 0 0 1 2.454-2.454h13.905V6H13.367Z"
    />
    <path
      fill="#263238"
      fillOpacity={0.2}
      d="M34.632 41.789H13.367a2.46 2.46 0 0 1-2.454-2.454v.204a2.46 2.46 0 0 0 2.454 2.454H34.63a2.46 2.46 0 0 0 2.454-2.454v-.204a2.46 2.46 0 0 1-2.453 2.454Z"
    />
    <path
      fill="#263238"
      fillOpacity={0.1}
      d="M29.725 15.821a2.452 2.452 0 0 1-2.453-2.453v.203a2.452 2.452 0 0 0 2.453 2.454h7.36v-.204h-7.36Z"
    />
    <path
      fill="url(#google-sheets-icon_svg__b)"
      d="M27.272 6H13.367a2.466 2.466 0 0 0-2.454 2.46v31.086A2.46 2.46 0 0 0 13.367 42H34.63a2.46 2.46 0 0 0 2.454-2.454V15.821l-9.813-9.82Z"
    />
    <defs>
      <radialGradient
        id="google-sheets-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(11.741 6.98) scale(42.2091)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.1} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="google-sheets-icon_svg__a"
        x1={32.537}
        x2={32.537}
        y1={15.884}
        y2={24.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#263238" stopOpacity={0.2} />
        <stop offset={1} stopColor="#263238" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleSheetsIcon;
