import * as React from 'react';
import { SVGProps } from 'react';

const SvgIraq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#iraq_svg__a)">
      <g clipPath="url(#iraq_svg__b)">
        <mask
          id="iraq_svg__c"
          width={36}
          height={24}
          x={3}
          y={2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path fill="#fff" d="M3 2h36v24H3z" />
        </mask>
        <g mask="url(#iraq_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="iraq_svg__d"
            width={36}
            height={24}
            x={3}
            y={2}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M3 2v24h36V2H3Z"
              clipRule="evenodd"
            />
          </mask>
          <g fillRule="evenodd" clipRule="evenodd" mask="url(#iraq_svg__d)">
            <path fill="#BF2714" d="M3 2v8h36V2H3Z" />
            <path fill="#272727" d="M3 18v8h36v-8H3Z" />
            <path
              fill="#009C4E"
              d="M9.004 14.811C10.027 16.117 8.625 17 8.625 17s1.226 0 1.695-.874h10.032V14.2s-.21-.925-1.103-.925-1.095.925-1.095.925h-3.528l3.414-2.68-.664-.52-3.792 2.976v.63h5.383v-.37s.03-.216.282-.216.19.215.19.215v.793h-6.784v-1.084l-.734.291v.793s-.9-.217-1.468-.217c-.569 0-.602-.576-.602-.576l-.847.576Zm13.623.074.55 1.218h-2.189v-4.889l.924.263v3.408h.715Zm10.198 0 .55 1.218h-2.19v-4.889l.924.263v3.408h.716Zm-2.71-3.62-.571.343v3.274h-.581v-2.626l-.957.49v2.136h-.643V13.4l-.727.416v.402s-1.4.086-1.4 1.845h4.873l.005-4.798Zm-18.687 5.7c.176 0 .319-.111.319-.25 0-.137-.143-.25-.319-.25-.176 0-.318.113-.318.25 0 .139.142.25.318.25Zm16.226-5.323c-.248.29-.998 0-.998 0l2.129-.22c-.22.382-1.131.22-1.131.22Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="iraq_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="iraq_svg__a"
        width={42}
        height={30}
        x={0}
        y={0}
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
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_27454"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_91_27454"
          result="effect2_dropShadow_91_27454"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27454"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgIraq;
