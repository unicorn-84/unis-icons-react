import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppcodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#247CE6"
      d="M36.431 34.294 42 19.556l-16.819-3.825-2.194 6.3 13.444 12.263Z"
    />
    <path
      fill="url(#appcode-icon_svg__a)"
      d="M42 34.856 33.506 42l-16.931-4.388 4.556-8.212L42 34.856Z"
    />
    <path
      fill="url(#appcode-icon_svg__b)"
      d="M10.95 23.887 6.675 11.57 25.744 6l-1.519 15.975-13.275 1.912Z"
    />
    <path
      fill="url(#appcode-icon_svg__c)"
      d="M37.388 26.813 32.044 17.7l.112-.056L25.744 6 6 27.319V42l35.888-7.144-4.5-8.044Z"
    />
    <path fill="#000" d="M35.25 12.75h-22.5v22.5h22.5v-22.5Z" />
    <path
      fill="#fff"
      d="M14.831 31.031h8.438v1.407H14.83V31.03Zm3.713-15.356H20.4l3.938 9.281H22.2l-.844-2.081h-3.881l-.844 2.081H14.55l3.994-9.281Zm2.137 5.456-1.237-2.981-1.238 2.981h2.475Zm3.15-.731a4.781 4.781 0 0 1 4.894-4.894c1.744 0 2.813.563 3.712 1.463l-1.293 1.518c-.731-.674-1.463-1.068-2.419-1.068-1.575 0-2.7 1.293-2.7 2.925 0 1.631 1.125 2.925 2.7 2.925 1.069 0 1.744-.45 2.475-1.125l1.294 1.35c-.956 1.012-2.025 1.687-3.825 1.687A4.719 4.719 0 0 1 23.83 20.4Z"
    />
    <defs>
      <linearGradient
        id="appcode-icon_svg__a"
        x1={16.603}
        x2={42}
        y1={35.7}
        y2={35.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#00DAF0" />
        <stop offset={0.9} stopColor="#247CE6" />
      </linearGradient>
      <linearGradient
        id="appcode-icon_svg__b"
        x1={51.105}
        x2={1345.87}
        y1={-12169.3}
        y2={-12169.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#00DAF0" />
        <stop offset={0.9} stopColor="#247CE6" />
      </linearGradient>
      <linearGradient
        id="appcode-icon_svg__c"
        x1={29.588}
        x2={11.678}
        y1={43.142}
        y2={18.304}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#1DDF93" />
        <stop offset={0.48} stopColor="#00DAF0" />
        <stop offset={0.9} stopColor="#247CE6" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppcodeIcon;
