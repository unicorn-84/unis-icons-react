import * as React from 'react';
import { SVGProps } from 'react';

const SvgMailchimpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="url(#mailchimp-icon_svg__a)" d="M9.502 8h28.996v32H9.502z" />
    <defs>
      <pattern
        id="mailchimp-icon_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#mailchimp-icon_svg__b"
          transform="matrix(.0045 0 0 .00408 -.059 -.057)"
        />
      </pattern>
    </defs>
  </svg>
);

export default SvgMailchimpIcon;
