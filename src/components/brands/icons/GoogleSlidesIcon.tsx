import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleSlidesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#F4B400"
      d="M27.27 6H13.362a2.461 2.461 0 0 0-2.454 2.454v31.092A2.46 2.46 0 0 0 13.36 42h21.27a2.46 2.46 0 0 0 2.453-2.454v-23.73l-5.73-4.093L27.27 6Z"
    />
    <path
      fill="#F1F1F1"
      d="M29.316 22.362H18.684c-.675 0-1.23.555-1.23 1.23v10.639c0 .675.555 1.23 1.23 1.23h10.638c.676 0 1.23-.555 1.23-1.23v-10.64a1.246 1.246 0 0 0-1.236-1.23Zm-.409 9.408h-9.814v-5.731h9.815v5.73Z"
    />
    <path
      fill="url(#google-slides-icon_svg__a)"
      d="m27.994 15.099 9.098 9.098v-8.381l-9.098-.717Z"
    />
    <path
      fill="#FADA80"
      d="M27.271 6.003v7.362a2.451 2.451 0 0 0 2.454 2.454h7.362l-9.816-9.816Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.1}
      d="M27.27 6v.204l9.618 9.612h.205L27.269 6Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.2}
      d="M13.362 6a2.461 2.461 0 0 0-2.454 2.454v.204a2.46 2.46 0 0 1 2.453-2.454H27.27V6H13.362Z"
    />
    <path
      fill="#BF360C"
      fillOpacity={0.2}
      d="M34.638 41.796H13.362a2.46 2.46 0 0 1-2.454-2.453v.203A2.46 2.46 0 0 0 13.362 42h21.27a2.46 2.46 0 0 0 2.453-2.454v-.203a2.45 2.45 0 0 1-2.447 2.453Z"
    />
    <path
      fill="#BF360C"
      fillOpacity={0.1}
      d="M29.73 15.816a2.451 2.451 0 0 1-2.453-2.454v.204a2.451 2.451 0 0 0 2.453 2.454h7.362v-.204H29.73Z"
    />
    <path
      fill="url(#google-slides-icon_svg__b)"
      d="M27.27 6H13.362a2.461 2.461 0 0 0-2.454 2.454v31.092A2.46 2.46 0 0 0 13.36 42h21.27a2.46 2.46 0 0 0 2.453-2.454v-23.73L27.27 6Z"
    />
    <defs>
      <radialGradient
        id="google-slides-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(11.739 6.976) scale(42.218)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.1} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="google-slides-icon_svg__a"
        x1={32.543}
        x2={32.543}
        y1={15.883}
        y2={24.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BF360C" stopOpacity={0.2} />
        <stop offset={1} stopColor="#BF360C" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleSlidesIcon;
