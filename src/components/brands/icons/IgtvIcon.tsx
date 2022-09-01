import * as React from 'react';
import { SVGProps } from 'react';

const SvgIgtvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="url(#igtv-icon_svg__a)"
      d="M25.813 23.95c0-.576-.26-1.12-.702-1.472a1.776 1.776 0 0 0-1.562-.332l-9.583 2.527c-.97.256-1.554 1.271-1.305 2.267.25.996 1.237 1.597 2.207 1.341l7.319-1.93v2.388c0 .58.263 1.126.71 1.478a1.78 1.78 0 0 0 1.576.32l9.583-2.661c.966-.268 1.538-1.291 1.277-2.284-.261-.993-1.257-1.58-2.223-1.312l-7.297 2.026V23.95Z"
    />
    <path
      fill="url(#igtv-icon_svg__b)"
      fillRule="evenodd"
      d="M18.375 2.377a1.781 1.781 0 0 1 2.54.363l2.996 4.075 3.206-4.116a1.78 1.78 0 0 1 2.548-.29c.782.642.909 1.814.283 2.617l-2.72 3.492c4.996.002 7.563.038 9.54 1.073a9.717 9.717 0 0 1 4.188 4.302C42 16 42 18.756 42 24.27v5.48c0 5.514 0 8.27-1.044 10.376a9.718 9.718 0 0 1-4.188 4.302c-2.05 1.073-4.733 1.073-10.1 1.073h-5.336c-5.367 0-8.05 0-10.1-1.073a9.718 9.718 0 0 1-4.188-4.302C6 38.02 6 35.263 6 29.75v-5.481c0-5.513 0-8.27 1.044-10.376a9.717 9.717 0 0 1 4.188-4.302c1.957-1.024 4.492-1.07 9.388-1.072l-2.6-3.534a1.896 1.896 0 0 1 .354-2.608Zm8.293 9.866h-5.336c-2.743 0-4.582.003-5.998.122-1.374.115-2.027.32-2.456.545a6.04 6.04 0 0 0-2.603 2.674c-.218.44-.418 1.111-.53 2.523-.116 1.454-.12 3.344-.12 6.162v5.48c0 2.819.004 4.708.12 6.163.112 1.411.312 2.082.53 2.522a6.04 6.04 0 0 0 2.603 2.674c.429.225 1.082.43 2.456.546 1.416.118 3.255.121 5.998.121h5.336c2.743 0 4.582-.003 5.998-.121 1.374-.116 2.027-.321 2.456-.546a6.04 6.04 0 0 0 2.603-2.674c.218-.44.418-1.111.53-2.522.116-1.455.12-3.344.12-6.162v-5.481c0-2.818-.004-4.708-.12-6.162-.112-1.412-.312-2.082-.53-2.523a6.04 6.04 0 0 0-2.603-2.674c-.429-.224-1.082-.43-2.456-.545-1.416-.119-3.255-.122-5.998-.122Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="igtv-icon_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-49.34 37.03 -16.849) scale(26.8304 22.7256)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.067} stopColor="#FB218B" />
        <stop offset={0.28} stopColor="#FB372B" />
        <stop offset={0.49} stopColor="#FC6822" />
        <stop offset={0.751} stopColor="#FDB630" />
      </radialGradient>
      <radialGradient
        id="igtv-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-49.34 37.03 -16.849) scale(26.8304 22.7256)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.067} stopColor="#FB218B" />
        <stop offset={0.28} stopColor="#FB372B" />
        <stop offset={0.49} stopColor="#FC6822" />
        <stop offset={0.751} stopColor="#FDB630" />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgIgtvIcon;
