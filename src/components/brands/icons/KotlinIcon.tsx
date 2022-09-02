import * as React from 'react';
import { SVGProps } from 'react';

const SvgKotlinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="url(#kotlin-icon_svg__a)" d="m6 42 18.06-18.06L42 42H6Z" />
    <path fill="url(#kotlin-icon_svg__b)" d="M6 6h18.06L6 25.5V6Z" />
    <path
      fill="url(#kotlin-icon_svg__c)"
      d="M24.06 6 6 25.02V42l18.06-18.06L42 6H24.06Z"
    />
    <defs>
      <linearGradient
        id="kotlin-icon_svg__a"
        x1={15.576}
        x2={20.614}
        y1={50.409}
        y2={30.388}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.097} stopColor="#0095D5" />
        <stop offset={0.301} stopColor="#238AD9" />
        <stop offset={0.621} stopColor="#557BDE" />
        <stop offset={0.864} stopColor="#7472E2" />
        <stop offset={1} stopColor="#806EE3" />
      </linearGradient>
      <linearGradient
        id="kotlin-icon_svg__b"
        x1={8.526}
        x2={19.098}
        y1={13.236}
        y2={4.167}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.118} stopColor="#0095D5" />
        <stop offset={0.418} stopColor="#3C83DC" />
        <stop offset={0.696} stopColor="#6D74E1" />
        <stop offset={0.833} stopColor="#806EE3" />
      </linearGradient>
      <linearGradient
        id="kotlin-icon_svg__c"
        x1={-0.061}
        x2={33.439}
        y1={39.098}
        y2={5.598}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.107} stopColor="#C757BC" />
        <stop offset={0.214} stopColor="#D0609A" />
        <stop offset={0.425} stopColor="#E1725C" />
        <stop offset={0.605} stopColor="#EE7E2F" />
        <stop offset={0.743} stopColor="#F58613" />
        <stop offset={0.823} stopColor="#F88909" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgKotlinIcon;
