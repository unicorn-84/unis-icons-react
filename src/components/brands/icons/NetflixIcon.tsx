import * as React from 'react';
import { SVGProps } from 'react';

const SvgNetflixIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#netflix-icon_svg__a)"
      d="m27.84 3.124-.02 9.24-.02 9.242-.881-2.146v-.005l-1.144 20.572c1.125 2.728 1.726 4.186 1.732 4.191.006.006.645.039 1.419.072 2.34.099 5.241.313 7.447.55.51.055.946.082.977.06.032-.022.039-9.428.032-20.907l-.019-20.869H27.84Z"
    />
    <path
      fill="url(#netflix-icon_svg__b)"
      d="M10.61 3.096v20.891c0 11.49.013 20.902.033 20.919.019.016.843-.055 1.84-.149.998-.093 2.372-.215 3.056-.264 1.048-.077 4.193-.248 4.55-.253.11 0 .116-.468.129-8.85l.019-8.85.76 1.848c.116.286.154.374.269.654L22.41 8.476c-.243-.589-.115-.28-.39-.952-.933-2.271-1.726-4.191-1.758-4.28l-.064-.153h-9.587v.005Z"
    />
    <path
      fill="#E30A17"
      d="m10.61 3.096 9.62 23.46v-.011l.761 1.848c4.225 10.291 6.494 15.814 6.507 15.825.007.005.646.038 1.42.071 2.339.1 5.24.314 7.446.55.505.055.946.083.971.06L27.8 21.6v.006l-.883-2.145-4.909-11.936c-.933-2.271-1.725-4.191-1.757-4.28l-.064-.153h-4.788l-4.787.005Z"
    />
    <defs>
      <linearGradient
        id="netflix-icon_svg__a"
        x1={41.678}
        x2={26.434}
        y1={34.366}
        y2={41.06}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B20610" />
        <stop offset={0.256} stopColor="#B20610" />
        <stop offset={1} stopColor="#590004" />
      </linearGradient>
      <linearGradient
        id="netflix-icon_svg__b"
        x1={5.988}
        x2={22.473}
        y1={12.257}
        y2={5.101}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B20610" />
        <stop offset={0.256} stopColor="#B20610" />
        <stop offset={1} stopColor="#590004" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgNetflixIcon;
