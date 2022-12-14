import * as React from 'react';
import { SVGProps } from 'react';

const SvgFrenchSouthernAndAntarcticLands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 42 30"
    {...props}
  >
    <g filter="url(#french-southern-and-antarctic-lands_svg__a)">
      <g clipPath="url(#french-southern-and-antarctic-lands_svg__b)">
        <mask
          id="french-southern-and-antarctic-lands_svg__c"
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
        <g mask="url(#french-southern-and-antarctic-lands_svg__c)">
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="french-southern-and-antarctic-lands_svg__d"
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
          <g mask="url(#french-southern-and-antarctic-lands_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M24.137 8.2h9.055l-.882 1.504h-2.747v.808h2.106l-.858 1.4h-1.248v2.798l2.055-2.88 2.66 4.095h-1.086l-.38-.448h-2.408l-1.693 2.78v.154l-.046-.077-.047.077v-.153l-1.693-2.781h-2.408l-.38.448h-1.086l2.66-4.095 2.056 2.88V9.704H25.02L24.137 8.2Zm7.534 5.31-.59.807h1.118l-.528-.807Zm-6.013 0 .59.807H25.13l.528-.807Zm-4.305-.897.935-.612.934.612-.33-1.026.908-.648-1.138-.022-.374-1.013-.374 1.013-1.14.022.909.648-.33 1.026Zm13.66-.612-.936.612.33-1.026-.907-.648 1.138-.022.374-1.013.374 1.013 1.139.022-.908.648.33 1.026-.935-.612Zm-3.799 7.803.935-.613.935.613-.33-1.027.908-.648-1.139-.022-.374-1.013-.374 1.013-1.138.022.907.648-.33 1.026Zm-6.063-.613-.935.613.33-1.027-.908-.648 1.139-.022.374-1.013.374 1.013 1.138.022-.907.648.33 1.026-.935-.612Zm2.564 3.01.935-.614.935.613-.33-1.026.908-.648-1.14-.022-.373-1.014-.374 1.014-1.139.021.908.649-.33 1.026Z"
              clipRule="evenodd"
            />
            <path fill="#2E42A5" stroke="#fff" d="M2.5 1.5H17v11H2.5z" />
            <mask
              id="french-southern-and-antarctic-lands_svg__e"
              width={16}
              height={12}
              x={2}
              y={1}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: 'alpha',
              }}
            >
              <path fill="#fff" stroke="#fff" d="M2.5 1.5H17v11H2.5z" />
            </mask>
            <g
              fillRule="evenodd"
              clipRule="evenodd"
              mask="url(#french-southern-and-antarctic-lands_svg__e)"
            >
              <path fill="#F50100" d="M12 2h4.5v10H12V2Z" />
              <path fill="#2E42A5" d="M3 2h4.5v10H3V2Z" />
              <path fill="#F7FCFF" d="M7.5 2H12v10H7.5V2Z" />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="french-southern-and-antarctic-lands_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="french-southern-and-antarctic-lands_svg__a"
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
          result="effect1_dropShadow_91_24797"
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
          in2="effect1_dropShadow_91_24797"
          result="effect2_dropShadow_91_24797"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24797"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgFrenchSouthernAndAntarcticLands;
