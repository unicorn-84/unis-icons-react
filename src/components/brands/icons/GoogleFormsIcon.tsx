import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleFormsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#673AB7"
      d="M27.428 6h-14.57c-1.373 0-2.572 1.2-2.572 2.572v30.856c0 1.371 1.2 2.572 2.572 2.572h22.284c1.371 0 2.572-1.2 2.572-2.572V16.286l-6-4.286-4.285-6Z"
    />
    <path
      fill="#F1F1F1"
      d="M20.572 32.57h10.285v-1.714H20.572v1.714Zm0-11.143v1.714h10.285v-1.713H20.572Zm-1.544.859c0 .685-.514 1.37-1.37 1.37-.858 0-1.372-.514-1.372-1.37 0-.857.514-1.371 1.371-1.371s1.37.684 1.37 1.37Zm0 4.8c0 .684-.514 1.37-1.37 1.37-.858 0-1.372-.514-1.372-1.37 0-.858.514-1.372 1.371-1.372s1.37.686 1.37 1.371Zm0 4.627c0 .685-.514 1.37-1.37 1.37-.858 0-1.372-.513-1.372-1.37 0-.857.514-1.37 1.371-1.37s1.37.685 1.37 1.37Zm1.544-3.428h10.285V26.57H20.572v1.715Z"
    />
    <path
      fill="url(#google-forms-icon_svg__a)"
      d="m28.114 15.6 9.6 9.429v-8.744l-9.6-.685Z"
    />
    <path
      fill="#B39DDB"
      d="M27.428 6v7.714c0 1.37 1.2 2.571 2.572 2.571h7.714L27.429 6Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.2}
      d="M12.858 6c-1.373 0-2.572 1.2-2.572 2.572v.171c0-1.372 1.2-2.572 2.572-2.572h14.57V6h-14.57Z"
    />
    <path
      fill="#311B92"
      fillOpacity={0.2}
      d="M35.142 41.827H12.858c-1.373 0-2.572-1.2-2.572-2.572v.172c0 1.37 1.2 2.572 2.572 2.572h22.284c1.371 0 2.572-1.2 2.572-2.572v-.172c0 1.373-1.2 2.572-2.572 2.572Z"
    />
    <path
      fill="#311B92"
      fillOpacity={0.1}
      d="M29.999 16.285c-1.371 0-2.572-1.199-2.572-2.571v.171c0 1.371 1.2 2.572 2.572 2.572h7.714v-.172h-7.714Z"
    />
    <path
      fill="url(#google-forms-icon_svg__b)"
      d="M27.428 6h-14.57c-1.373 0-2.572 1.2-2.572 2.572v30.856c0 1.371 1.2 2.572 2.572 2.572h22.284c1.371 0 2.572-1.2 2.572-2.572V16.286L27.429 6Z"
    />
    <defs>
      <radialGradient
        id="google-forms-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(353.788 0 0 353.785 11.154 6.96)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.1} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="google-forms-icon_svg__a"
        x1={32.913}
        x2={32.913}
        y1={16.351}
        y2={25.065}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#311B92" stopOpacity={0.2} />
        <stop offset={1} stopColor="#311B92" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleFormsIcon;
