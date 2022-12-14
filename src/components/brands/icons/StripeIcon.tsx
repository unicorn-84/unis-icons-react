import * as React from 'react';
import { SVGProps } from 'react';

const SvgStripeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#stripe-icon_svg__a)"
      d="M4.308 9.552C3 12.12 3 15.48 3 22.2v3.6c0 6.72 0 10.08 1.308 12.648a12 12 0 0 0 5.244 5.244C12.12 45 15.48 45 22.2 45h3.6c6.72 0 10.08 0 12.648-1.308a12 12 0 0 0 5.244-5.244C45 35.88 45 32.52 45 25.8v-3.6c0-6.72 0-10.08-1.308-12.648a12 12 0 0 0-5.244-5.244C35.88 3 32.52 3 25.8 3h-3.6C15.48 3 12.12 3 9.552 4.308a12 12 0 0 0-5.244 5.244Z"
    />
    <path
      fill="url(#stripe-icon_svg__b)"
      d="M3.398 12.42C3 14.68 3 17.68 3 22.2v3.6c0 6.72 0 10.08 1.308 12.648a12 12 0 0 0 5.244 5.244C12.12 45 15.48 45 22.2 45h3.6c6.72 0 10.08 0 12.648-1.308a12 12 0 0 0 5.244-5.244C45 35.88 45 32.52 45 25.8v-3.6c0-6.72 0-10.081-1.308-12.648a12 12 0 0 0-5.01-5.122L3.398 12.42Z"
    />
    <path
      fill="url(#stripe-icon_svg__c)"
      d="M44.566 35.781c-.193 1.014-.472 1.878-.874 2.667a12 12 0 0 1-5.244 5.244c-2.49 1.269-5.727 1.307-12.054 1.308h-2.306v-4.745l20.477-4.474Z"
    />
    <path
      fill="url(#stripe-icon_svg__d)"
      d="M25.8 3h-3.6c-1.308 0-2.488 0-3.56.01v5.946l20.038-4.528-.23-.12c-1.425-.726-3.095-1.05-5.448-1.193C31.114 3 28.79 3 25.8 3Z"
    />
    <path
      fill="url(#stripe-icon_svg__e)"
      d="M45 26.06c0 4.508-.008 7.48-.434 9.721l-7.123 1.556V26.724L45 24.966v1.094Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M22.411 20.067c0-.964.788-1.335 2.094-1.335 1.872 0 4.236.569 6.108 1.582v-5.809c-2.044-.816-4.064-1.137-6.108-1.137-5 0-8.325 2.62-8.325 6.995 0 6.823 9.36 5.735 9.36 8.677 0 1.137-.986 1.507-2.365 1.507-2.044 0-4.655-.84-6.724-1.977v5.883a17.02 17.02 0 0 0 6.724 1.409c5.123 0 8.645-2.546 8.645-6.97-.024-7.367-9.409-6.057-9.409-8.825Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="stripe-icon_svg__a"
        x1={3}
        x2={16.795}
        y1={3}
        y2={12.753}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#392993" />
        <stop offset={1} stopColor="#4B47B9" />
      </linearGradient>
      <linearGradient
        id="stripe-icon_svg__b"
        x1={4.582}
        x2={35.035}
        y1={12.862}
        y2={37.981}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#594BB9" />
        <stop offset={1} stopColor="#60A8F2" />
      </linearGradient>
      <linearGradient
        id="stripe-icon_svg__c"
        x1={24.088}
        x2={45}
        y1={40.431}
        y2={45}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#61A2EF" />
        <stop offset={1} stopColor="#58E6FD" />
      </linearGradient>
      <linearGradient
        id="stripe-icon_svg__d"
        x1={18.64}
        x2={45}
        y1={5.987}
        y2={3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#534EBE" />
        <stop offset={1} stopColor="#6875E2" />
      </linearGradient>
      <linearGradient
        id="stripe-icon_svg__e"
        x1={37.444}
        x2={45}
        y1={26.812}
        y2={35.862}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#71A5F3" />
        <stop offset={1} stopColor="#6CC3FA" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgStripeIcon;
