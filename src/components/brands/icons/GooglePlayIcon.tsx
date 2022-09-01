import * as React from 'react';
import { SVGProps } from 'react';

const SvgGooglePlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g filter="url(#google-play-icon_svg__a)">
      <path
        fill="url(#google-play-icon_svg__b)"
        d="M10.213 8.494c-.362.383-.576.978-.576 1.748v27.515c0 .772.214 1.365.576 1.748l.092.09L25.718 24.18v-.363L10.305 8.403l-.092.091Z"
      />
      <path
        fill="url(#google-play-icon_svg__c)"
        d="m30.855 29.32-5.137-5.139v-.363l5.139-5.138.116.066 6.087 3.458c1.738.988 1.738 2.604 0 3.593l-6.088 3.46-.117.064Z"
      />
      <g filter="url(#google-play-icon_svg__d)">
        <path
          fill="url(#google-play-icon_svg__e)"
          d="M30.972 29.255 25.717 24 10.213 39.505c.572.607 1.519.682 2.585.077l18.174-10.327Z"
        />
      </g>
      <path
        fill="url(#google-play-icon_svg__f)"
        d="M30.972 18.744 12.798 8.418c-1.066-.606-2.013-.53-2.585.077l15.505 15.506 5.254-5.257Z"
      />
    </g>
    <defs>
      <linearGradient
        id="google-play-icon_svg__b"
        x1={24.352}
        x2={3.473}
        y1={9.951}
        y2={30.83}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A0FF" />
        <stop offset={0.007} stopColor="#00A1FF" />
        <stop offset={0.26} stopColor="#00BEFF" />
        <stop offset={0.512} stopColor="#00D2FF" />
        <stop offset={0.76} stopColor="#00DFFF" />
        <stop offset={1} stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="google-play-icon_svg__c"
        x1={39.322}
        x2={9.22}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE000" />
        <stop offset={0.409} stopColor="#FFBD00" />
        <stop offset={0.775} stopColor="orange" />
        <stop offset={1} stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="google-play-icon_svg__e"
        x1={28.118}
        x2={-0.196}
        y1={26.854}
        y2={55.168}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3A44" />
        <stop offset={1} stopColor="#C31162" />
      </linearGradient>
      <linearGradient
        id="google-play-icon_svg__f"
        x1={6.308}
        x2={18.951}
        y1={-0.664}
        y2={11.979}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32A071" />
        <stop offset={0.069} stopColor="#2DA771" />
        <stop offset={0.476} stopColor="#15CF74" />
        <stop offset={0.801} stopColor="#06E775" />
        <stop offset={1} stopColor="#00F076" />
      </linearGradient>
      <filter
        id="google-play-icon_svg__a"
        width={28.727}
        height={32}
        x={9.637}
        y={8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-0.15} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect1_innerShadow_5_1779" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.15} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend
          in2="effect1_innerShadow_5_1779"
          result="effect2_innerShadow_5_1779"
        />
      </filter>
      <filter
        id="google-play-icon_svg__d"
        width={20.759}
        height={16}
        x={10.213}
        y={24}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-0.15} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="shape" result="effect1_innerShadow_5_1779" />
      </filter>
    </defs>
  </svg>
);

export default SvgGooglePlayIcon;
