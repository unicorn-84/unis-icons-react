import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#0068B5" d="M8 17h2.53v2.53H8z" />
    <path
      fill="#000"
      d="M40 17h-2.535v13.29H40V17Zm-17.848.686h2.534v3.533h1.585v2.056h-1.585v3.718c0 1.16.995 1.222 1.558 1.108v2.24c-3.358 0-4.092-1.027-4.092-3.9v-8.755Zm-7.762 4.61c.546-.608 1.51-1.288 2.85-1.288 2.272 0 3.618 1.951 3.618 3.612v5.669H18.43v-5.194c-.018-.668-.444-2.004-2.007-2.004-1.08 0-1.709.713-2.033 1.4v5.798h-2.534v-9.07h2.534v1.077ZM8 21.219h2.535v9.07H8v-9.07Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M29.155 26.598h7.254v-.844a4.75 4.75 0 0 0-4.752-4.746 4.75 4.75 0 0 0-4.753 4.746 4.75 4.75 0 0 0 4.753 4.746c1.54 0 2.91-.733 3.776-1.864l-1.678-1.282a2.641 2.641 0 0 1-4.6-.757Zm4.986-1.74a2.641 2.641 0 0 0-4.968 0h4.968Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIntelIcon;
