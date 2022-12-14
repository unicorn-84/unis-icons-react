import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleMapsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <g filter="url(#google-maps-icon_svg__a)">
      <path
        fill="#34A851"
        fillRule="evenodd"
        d="M38.545 18.203v.29c0 6.066-4.725 11.435-7.888 15.028-.918 1.043-1.704 1.936-2.204 2.653-1.781 2.55-2.721 5.314-2.969 6.377 0 .8-.664 1.449-1.484 1.449s-1.484-.649-1.484-1.45c-.248-1.062-1.188-3.825-2.969-6.376-.5-.717-1.286-1.61-2.204-2.653-3.162-3.593-7.888-8.962-7.888-15.028v-.29C9.455 10.359 15.967 4 24 4c8.033 0 14.545 6.359 14.545 14.203ZM24 23.42c3.115 0 5.64-2.465 5.64-5.507s-2.525-5.507-5.64-5.507c-3.115 0-5.64 2.465-5.64 5.507S20.885 23.42 24 23.42Z"
        clipRule="evenodd"
      />
      <path
        fill="#4285F5"
        d="M36.919 11.67c-1.781-3.351-4.89-5.921-8.646-7.047l-8.353 9.489A5.689 5.689 0 0 1 24 12.406c3.115 0 5.64 2.466 5.64 5.507a5.4 5.4 0 0 1-1.129 3.307l8.408-9.55Z"
      />
      <path
        fill="#F9BB0E"
        d="m17.511 33.713-.168-.191c-2.085-2.369-4.849-5.51-6.49-9.112l8.682-9.862a5.401 5.401 0 0 0-1.176 3.365c0 3.042 2.526 5.508 5.64 5.508a5.69 5.69 0 0 0 4.029-1.653L17.51 33.713Z"
      />
      <path
        fill="#E74335"
        d="M12.896 9.028c-2.147 2.476-3.441 5.678-3.441 9.175v.29c0 2.068.549 4.054 1.398 5.917l8.667-9.845-6.624-5.537Z"
      />
      <path
        fill="#1A73E6"
        d="M28.273 4.623A14.869 14.869 0 0 0 24 4c-4.452 0-8.436 1.952-11.104 5.028l6.624 5.537.014-.017a5.7 5.7 0 0 1 .385-.437l8.354-9.488Z"
      />
    </g>
    <defs>
      <filter
        id="google-maps-icon_svg__a"
        width={52}
        height={52}
        x={-2}
        y={-1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_1876" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_1876"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGoogleMapsIcon;
