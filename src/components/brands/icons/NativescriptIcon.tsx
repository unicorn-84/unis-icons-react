import * as React from 'react';
import { SVGProps } from 'react';

const SvgNativescriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#3C5AFD"
      d="M39.363 8.637c1.693 1.693 2.572 3.814 2.636 6.363v18c-.064 2.548-.943 4.67-2.636 6.363-1.693 1.693-3.815 2.572-6.364 2.637H15c-2.548-.065-4.669-.944-6.362-2.637C6.944 37.67 6.065 35.548 6 33V15c.065-2.549.944-4.67 2.637-6.363C10.33 6.944 12.451 6.065 15 6h18c2.548.065 4.67.944 6.363 2.637ZM36.88 23.121c-.566-.563-.86-1.269-.883-2.118V15c-.018-.85-.31-1.557-.875-2.122-.565-.566-1.273-.857-2.123-.875h-2.996v14.994L17.997 12.003H15c-.85.018-1.557.309-2.122.875-.566.565-.857 1.272-.875 2.122v6.003c-.024.85-.318 1.555-.883 2.118s-1.273.855-2.122.879c.85.024 1.557.317 2.122.879.566.563.86 1.269.883 2.118V33c.018.85.309 1.557.875 2.122.565.566 1.272.857 2.122.875h2.997V21.003l12.006 14.994h2.996c.85-.018 1.558-.31 2.123-.875.566-.565.857-1.273.875-2.122v-6.003c.023-.85.318-1.555.883-2.118.566-.563 1.273-.855 2.122-.88-.85-.023-1.556-.316-2.122-.878Z"
    />
  </svg>
);

export default SvgNativescriptIcon;
