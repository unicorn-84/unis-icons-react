import * as React from 'react';
import { SVGProps } from 'react';

const SvgSublimetextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#sublimetext-icon_svg__a)"
      d="M37.854 24.106c0-.422-.312-.665-.694-.544l-26.324 8.347c-.383.122-.694.563-.694.984v8.531c0 .422.31.666.694.545l26.324-8.347c.383-.121.694-.563.694-.984v-8.532Z"
    />
    <path
      fill="#FF9800"
      d="M10.142 23.834c0 .422.31.864.694.985l26.328 8.348c.383.122.694-.122.694-.543v-8.532c0-.422-.31-.863-.694-.984L10.836 14.76c-.383-.122-.694.121-.694.543v8.531Z"
    />
    <path
      fill="#FF9800"
      d="M37.854 6.576c0-.422-.312-.666-.694-.545l-26.324 8.347c-.383.121-.694.563-.694.985v8.53c0 .423.31.666.694.545l26.324-8.347c.383-.122.694-.563.694-.984V6.576Z"
    />
    <defs>
      <linearGradient
        id="sublimetext-icon_svg__a"
        x1={25.416}
        x2={26.578}
        y1={34.368}
        y2={30.482}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9700" />
        <stop offset={0.53} stopColor="#F48E00" />
        <stop offset={1} stopColor="#D06F00" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgSublimetextIcon;
