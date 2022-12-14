import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsOutlookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width={20} height={28} x={18} y={10} fill="#1066B5" rx={2} />
    <rect
      width={20}
      height={28}
      x={18}
      y={10}
      fill="url(#ms-outlook-icon_svg__a)"
      rx={2}
    />
    <path fill="#32A9E7" d="M18 13h10v10H18z" />
    <path fill="#167EB4" d="M18 23h10v10H18z" />
    <path fill="#32A9E7" d="M28 23h10v10H28z" />
    <path fill="#58D9FD" d="M28 13h10v10H28z" />
    <mask
      id="ms-outlook-icon_svg__c"
      width={24}
      height={16}
      x={16}
      y={22}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#ms-outlook-icon_svg__b)"
        d="M16 22h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V22Z"
      />
    </mask>
    <g mask="url(#ms-outlook-icon_svg__c)">
      <path fill="#135298" d="M40 22v4h-2v-4h2Z" />
      <path fill="url(#ms-outlook-icon_svg__d)" d="M40 38V24L15 38h25Z" />
      <path fill="url(#ms-outlook-icon_svg__e)" d="M16 38V24l25 14H16Z" />
    </g>
    <path
      fill="#000"
      fillOpacity={0.3}
      d="M16 20a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9V20Z"
    />
    <rect
      width={18}
      height={18}
      x={8}
      y={15}
      fill="url(#ms-outlook-icon_svg__f)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M22 24.07v-.167C22 21.023 19.927 19 17.016 19 14.089 19 12 21.036 12 23.93v.167C12 26.977 14.073 29 17 29c2.911 0 5-2.036 5-4.93Zm-2.358.027c0 1.911-1.075 3.06-2.626 3.06-1.55 0-2.643-1.176-2.643-3.088v-.166c0-1.911 1.076-3.06 2.627-3.06 1.535 0 2.642 1.176 2.642 3.088v.166Z"
    />
    <defs>
      <linearGradient
        id="ms-outlook-icon_svg__a"
        x1={18}
        x2={38}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#064484" />
        <stop offset={1} stopColor="#0F65B5" />
      </linearGradient>
      <linearGradient
        id="ms-outlook-icon_svg__b"
        x1={16}
        x2={40}
        y1={34.769}
        y2={34.769}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B366F" />
        <stop offset={1} stopColor="#2657B0" />
      </linearGradient>
      <linearGradient
        id="ms-outlook-icon_svg__d"
        x1={40}
        x2={16}
        y1={31}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#44DCFD" />
        <stop offset={0.453} stopColor="#259ED0" />
      </linearGradient>
      <linearGradient
        id="ms-outlook-icon_svg__e"
        x1={16}
        x2={40}
        y1={31}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#259ED0" />
        <stop offset={1} stopColor="#44DCFD" />
      </linearGradient>
      <linearGradient
        id="ms-outlook-icon_svg__f"
        x1={8}
        x2={26}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#064484" />
        <stop offset={1} stopColor="#0F65B5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsOutlookIcon;
