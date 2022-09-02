import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsTeamsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="url(#ms-teams-icon_svg__a)"
      d="M27 22.903c0-.499.404-.903.903-.903h11.194c.499 0 .903.404.903.903V29.5a6.5 6.5 0 1 1-13 0v-6.597Z"
    />
    <path
      fill="url(#ms-teams-icon_svg__b)"
      d="M17 21.226c0-.677.549-1.226 1.226-1.226h13.548c.677 0 1.226.549 1.226 1.226V31a8 8 0 1 1-16 0v-9.774Z"
    />
    <circle cx={35} cy={17} r={3} fill="#34439E" />
    <circle cx={35} cy={17} r={3} fill="url(#ms-teams-icon_svg__c)" />
    <circle cx={26} cy={15} r={4} fill="url(#ms-teams-icon_svg__d)" />
    <mask
      id="ms-teams-icon_svg__g"
      width={16}
      height={30}
      x={17}
      y={9}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#ms-teams-icon_svg__e)"
        d="M25 19a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <path
        fill="url(#ms-teams-icon_svg__f)"
        d="M18.226 20c-.677 0-1.226.549-1.226 1.226V31a8 8 0 1 0 16 0v-9.774c0-.677-.549-1.226-1.226-1.226H18.226Z"
      />
    </mask>
    <g mask="url(#ms-teams-icon_svg__g)">
      <path
        fill="#000"
        fillOpacity={0.3}
        d="M15 21a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H15V21Z"
      />
    </g>
    <rect
      width={18}
      height={18}
      x={8}
      y={16}
      fill="url(#ms-teams-icon_svg__h)"
      rx={2}
    />
    <path fill="#fff" d="M21 20h-8v1.835h2.995V30h2.01v-8.165H21V20Z" />
    <defs>
      <linearGradient
        id="ms-teams-icon_svg__a"
        x1={27}
        x2={40.159}
        y1={22.737}
        y2={31.335}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088" />
        <stop offset={1} stopColor="#6E7EE1" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__b"
        x1={17}
        x2={33}
        y1={28.404}
        y2={28.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#515FC4" />
        <stop offset={1} stopColor="#7084EA" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__c"
        x1={32}
        x2={37.796}
        y1={14.316}
        y2={18.395}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088" />
        <stop offset={1} stopColor="#6E7EE1" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__d"
        x1={23.143}
        x2={28.286}
        y1={12.143}
        y2={18.143}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__e"
        x1={21.429}
        x2={27.857}
        y1={10.429}
        y2={17.929}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__f"
        x1={21.429}
        x2={27.857}
        y1={10.429}
        y2={17.929}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="ms-teams-icon_svg__h"
        x1={8}
        x2={26}
        y1={25}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A3887" />
        <stop offset={1} stopColor="#4C56B9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsTeamsIcon;
