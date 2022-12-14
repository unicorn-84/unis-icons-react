import * as React from 'react';
import { SVGProps } from 'react';

const SvgPythonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#python-icon_svg__a)"
      d="M23.884 8.083c-8.123 0-7.616 3.523-7.616 3.523l.01 3.65h7.751v1.096H13.2S8 15.762 8 23.959c0 8.197 4.537 7.906 4.537 7.906h2.708V28.06s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175V12.33s.656-4.248-7.834-4.248Zm-4.274 2.455a1.393 1.393 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.396c0-.771.624-1.394 1.395-1.394Z"
    />
    <path
      fill="url(#python-icon_svg__b)"
      d="M24.116 39.916c8.123 0 7.616-3.522 7.616-3.522l-.01-3.65h-7.751v-1.096H34.8s5.2.59 5.2-7.607c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.804s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.018s-.656 4.248 7.834 4.248Zm4.274-2.454a1.393 1.393 0 0 1-1.395-1.394c0-.772.624-1.395 1.395-1.395a1.394 1.394 0 1 1 0 2.789Z"
    />
    <defs>
      <linearGradient
        id="python-icon_svg__a"
        x1={11.075}
        x2={26.933}
        y1={10.947}
        y2={26.646}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#387EB8" />
        <stop offset={1} stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="python-icon_svg__b"
        x1={20.809}
        x2={37.839}
        y1={21.028}
        y2={37.127}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE052" />
        <stop offset={1} stopColor="#FFC331" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgPythonIcon;
