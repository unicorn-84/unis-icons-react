import * as React from 'react';
import { SVGProps } from 'react';

const SvgJbYoutrackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#0CB0F2"
      d="M17.758 19.828c5.955-5.432 12.57-11.488 12.762-11.68.298-.303.617-.585.956-.843a6.592 6.592 0 0 1 9.617 8.605 6.14 6.14 0 0 1-1.04 1.35c-1.322 1.322-6.384 6.693-6.384 6.693s6.637 6.384 6.75 6.468a4.218 4.218 0 0 1 .984 5.456A4.345 4.345 0 0 1 38.45 37.9c-.365.065-5.191-4.58-10.52-8.338-3.37 3.78-10.072 11.297-10.093 11.297-2.846 1.99-6.328.894-7.902.028a7.936 7.936 0 0 1-1.322-12.74c.928-.843 4.865-4.414 9.14-8.323l.005.003Z"
    />
    <path
      fill="url(#jb-youtrack-icon_svg__a)"
      d="M29.597 21.768a5.113 5.113 0 0 0-1.95-3.32L17.28 7.958a6.606 6.606 0 1 0-8.568 10.005L21.227 26.7a5.225 5.225 0 0 0 8.37-4.932Z"
    />
    <path fill="#000" d="M35.143 12.877H12.73V35.29h22.413V12.877Z" />
    <path
      fill="#fff"
      d="M14.999 30.751h8.209v1.485h-8.21v-1.485Zm2.998-8.993-3.783-5.94h2.522l2.353 3.95 2.382-3.95h2.46l-3.783 5.912v3.922h-2.157v-3.894h.006Zm9.245-3.95h-2.998v-1.99h8.125v1.99h-2.97v7.816h-2.157v-7.816Z"
    />
    <defs>
      <linearGradient
        id="jb-youtrack-icon_svg__a"
        x1={21.568}
        x2={7.695}
        y1={20.545}
        y2={6.085}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#905CFB" />
        <stop offset={0.07} stopColor="#A554E6" />
        <stop offset={0.25} stopColor="#D641B5" />
        <stop offset={0.39} stopColor="#F43597" />
        <stop offset={0.47} stopColor="#FF318C" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgJbYoutrackIcon;
