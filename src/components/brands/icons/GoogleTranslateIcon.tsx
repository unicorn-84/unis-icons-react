import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleTranslateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#DBDBDB"
      d="M37.868 40c1.17 0 2.129-.942 2.129-2.096V16.52c0-1.154-.959-2.096-2.129-2.096H17.094L25.43 40h12.437Z"
    />
    <path
      fill="#DCDCDC"
      d="M37.868 15.385c.311 0 .606.122.827.34.218.215.34.497.34.795v21.384a1.1 1.1 0 0 1-.34.795c-.22.218-.516.34-.827.34H26.13l-7.712-23.654h19.45Zm0-.961H17.094L25.43 40h12.437c1.17 0 2.129-.942 2.129-2.096V16.52c0-1.154-.959-2.096-2.129-2.096Z"
    />
    <path fill="#4352B8" d="M23.463 33.958 25.431 40l5.472-6.042h-7.44Z" />
    <path
      fill="#607988"
      d="M38.01 23.261v-1.253h-6.043v-2.026h-1.962v2.026H26.15v1.253h7.674c-.41 1.446-1.317 2.811-2.202 3.872-1.567-1.856-1.574-2.458-1.574-2.458H28.42s.067.904 2.266 3.48c-.715.732-1.256 1.164-1.256 1.164l.5 1.565s.756-.651 1.702-1.654a70.133 70.133 0 0 0 3.756 3.74l1.03-1.028c-1.696-1.54-2.94-2.76-3.854-3.741 1.225-1.45 2.469-3.273 2.731-4.943h2.712v.003h.004Z"
    />
    <path
      fill="#4285F4"
      d="M10.132 8c-1.17 0-2.129.958-2.129 2.132v21.7c0 1.17.959 2.129 2.129 2.129h20.774L22.57 8H10.132Z"
    />
    <path
      fill="url(#google-translate-icon_svg__a)"
      d="M25.13 14.424h12.738c1.17 0 2.129.942 2.129 2.096v12.828L25.13 14.424Z"
    />
    <path
      fill="#EEE"
      d="M19.908 21.803c-.08.97-.91 2.41-2.92 2.41-1.74 0-3.15-1.44-3.15-3.212 0-1.772 1.41-3.212 3.15-3.212.99 0 1.65.43 2.03.78l1.32-1.27a4.841 4.841 0 0 0-3.35-1.301c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.891 0 4.802-2.029 4.802-4.89a4.41 4.41 0 0 0-.119-1.02h-4.68v1.711l2.917.004Z"
    />
    <path
      fill="url(#google-translate-icon_svg__b)"
      d="M37.868 14.424H24.633L22.57 8H10.132c-1.17 0-2.129.958-2.129 2.132v21.7c0 1.17.959 2.129 2.129 2.129h13.331L25.431 40h12.437c1.17 0 2.129-.942 2.129-2.096V16.52c0-1.154-.959-2.096-2.129-2.096Z"
    />
    <defs>
      <radialGradient
        id="google-translate-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(10.093 8.62) scale(44.8209)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.1} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="google-translate-icon_svg__a"
        x1={25.13}
        x2={39.997}
        y1={21.886}
        y2={21.886}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleTranslateIcon;
