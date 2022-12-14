import * as React from 'react';
import { SVGProps } from 'react';

const SvgReactivexIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FF0090"
      d="M8.347 28.758c-1.845-9.81 3.031-19.272 14.224-20.53-1.543-1.65-3.652-1.662-4.622-1.462-1.713.546-1.66 1.655-3.602 3.087-1.932 1.103-2.902.258-4.31 1.402-1.403 1.135-.424 3.741-1.012 4.248-.585 1.013-2.398 1.916-2.728 3.195-.273 1.637.74 2.806.701 4.21.117 1.168-1.164 1.83-.98 2.777.551 1.548 1.614 2.48 2.115 2.91.114.08.236.28.214.163Z"
    />
    <path
      fill="url(#reactivex-icon_svg__a)"
      d="M28.263 15.178a.74.74 0 1 1 0-1.481.74.74 0 0 1 0 1.48ZM8.78 29.828c-1.773-8.526 3.714-15.65 14.34-12.143 6.235 3.648 14.079 3.41 14.432 1.052.873-2.826-3.975-8.651-11.223-10.171C11.948 5.76 4.195 21.302 8.778 29.828Z"
    />
    <path
      fill="url(#reactivex-icon_svg__b)"
      d="M32.368 30.78c2.136.23 4.163-.282 6.04-1.813-2.837 3.166-6.385 4.757-10.456 5.19 1.943 1.653 3.818 2.397 5.611 2.078-4.983 1.375-9.158-.138-14.236-5.196-.266 1.362 1.172 3.483 2.654 4.837-8.6-3.728-9.354-15.342 1.133-18.2-10.87-5.222-17.017 4.926-13.998 13.243 2.955 6.406 10.83 11.337 19.46 10.253 4.191-.514 10.45-3.404 13.008-10.253-1.803 1.617-5.024 3.026-6.462 3.134 4.866-2.432 7.492-6.564 6.755-12.211-1.008 2.4-2.337 4.242-4 5.508 3.533-5.508 2.926-8.355.311-11.484 1.87 5.145-.55 10.854-5.82 14.913Z"
    />
    <path
      fill="url(#reactivex-icon_svg__c)"
      d="M29.871 36.706c-.369-.07.837.488-1.495-.129-2.331-.617-4.706-1.212-9.05-5.538-.265 1.362 1.173 3.483 2.655 4.837 4 2.79 1.28 1.486 7.376 3.593.49-.974.514-1.84.514-2.763Z"
    />
    <path
      fill="url(#reactivex-icon_svg__d)"
      d="M22.12 14.794s.53-.782.736-1.135c.253-.432.641-1.22.641-1.22s-4.08-1.331-5.08-1.494c-3.113.808-3.124 2.112-1.384 4.108.193.222 5.087-.259 5.087-.259Z"
    />
    <defs>
      <radialGradient
        id="reactivex-icon_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(27.1332 0 0 19.4096 31.241 16.405)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F80090" />
        <stop offset={1} stopColor="#4D008E" />
      </radialGradient>
      <radialGradient
        id="reactivex-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(27.5024 0 0 20.8044 31.48 16.986)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#57008E" />
        <stop offset={0.292} stopColor="#5C008E" />
        <stop offset={1} stopColor="#F80090" />
      </radialGradient>
      <linearGradient
        id="reactivex-icon_svg__c"
        x1={21.224}
        x2={26.085}
        y1={31.039}
        y2={39.215}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F70090" />
        <stop offset={0.67} stopColor="#E50090" />
        <stop offset={0.827} stopColor="#D6008F" stopOpacity={0.2} />
        <stop offset={1} stopColor="#C10090" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="reactivex-icon_svg__d"
        x1={20.82}
        x2={20.114}
        y1={13.927}
        y2={12.575}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B2008F" stopOpacity={0.151} />
        <stop offset={0.4} stopColor="#F70090" stopOpacity={0.4} />
        <stop offset={0.649} stopColor="#F60090" stopOpacity={0.892} />
        <stop offset={1} stopColor="#FF0090" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgReactivexIcon;
