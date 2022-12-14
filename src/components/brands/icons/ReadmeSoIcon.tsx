import * as React from 'react';
import { SVGProps } from 'react';

const SvgReadmeSoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#readme-so-icon_svg__a)">
      <path
        fill="url(#readme-so-icon_svg__b)"
        d="M6 12.347A6.347 6.347 0 0 1 12.347 6h23.306A6.347 6.347 0 0 1 42 12.347v23.306A6.347 6.347 0 0 1 35.653 42H12.347A6.347 6.347 0 0 1 6 35.653V12.347Z"
      />
      <g filter="url(#readme-so-icon_svg__c)">
        <mask
          id="readme-so-icon_svg__d"
          width={28}
          height={26}
          x={10}
          y={11}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M32.352 14.802a2.323 2.323 0 1 0-4.488-1.204l-1.01 3.774H23.85l.688-2.57a2.323 2.323 0 1 0-4.488-1.204l-1.01 3.774h-4.29a2.325 2.325 0 0 0-2.324 2.326 2.325 2.325 0 0 0 2.324 2.326h3.044l-.792 2.96H13.06a2.325 2.325 0 0 0-2.323 2.326 2.325 2.325 0 0 0 2.323 2.326h2.697l-.928 3.467a2.323 2.323 0 1 0 4.488 1.204l1.25-4.671h3.005l-.928 3.467a2.323 2.323 0 1 0 4.488 1.204l1.25-4.671h4.848a2.324 2.324 0 0 0 2.324-2.326 2.324 2.324 0 0 0-2.324-2.326h-3.603l.793-2.96h4.5a2.325 2.325 0 0 0 2.323-2.326 2.325 2.325 0 0 0-2.323-2.326h-3.255l.687-2.57Zm-10.54 10.182h3.005l.792-2.96h-3.004l-.793 2.96Z"
            clipRule="evenodd"
          />
        </mask>
        <g mask="url(#readme-so-icon_svg__d)">
          <path
            fill="#A3FFE0"
            d="M44.038 24.068 20.718.97 13.7 7.921 37.02 31.02l7.018-6.952Z"
          />
          <path
            fill="#62FFCB"
            d="M37.02 31.02 13.7 7.92l-7.018 6.952 23.32 23.1 7.018-6.952Z"
          />
          <path
            fill="#2CFFB9"
            d="M30.002 37.971 6.682 14.872l-7.017 6.952 23.32 23.099 7.017-6.952Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="readme-so-icon_svg__b"
        x1={24}
        x2={24}
        y1={6}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ECB8" />
        <stop offset={1} stopColor="#2FC090" />
      </linearGradient>
      <clipPath id="readme-so-icon_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="readme-so-icon_svg__c"
        width={46.507}
        height={44.158}
        x={0.737}
        y={4.874}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_725" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_725"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={25} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_5_725" />
      </filter>
    </defs>
  </svg>
);

export default SvgReadmeSoIcon;
