import * as React from 'react';
import { SVGProps } from 'react';

const SvgTypescriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="#007ACC" d="M6 24v18h36V6H6v18Z" />
    <path
      fill="#fff"
      d="m13.961 24.12-.011 1.474h4.685v13.314h3.314V25.594h4.686v-1.446c0-.8-.017-1.469-.04-1.486-.017-.023-2.868-.034-6.325-.028l-6.292.017-.017 1.468Zm21.087-1.511a4.48 4.48 0 0 1 2.252 1.297c.331.354.823 1 .863 1.154.011.046-1.554 1.098-2.503 1.686-.034.023-.171-.126-.326-.354-.463-.674-.948-.966-1.691-1.017-1.092-.075-1.794.497-1.789 1.451 0 .28.04.446.154.674.24.497.686.795 2.086 1.4 2.577 1.109 3.68 1.84 4.366 2.88.766 1.16.937 3.012.417 4.389-.571 1.497-1.989 2.514-3.983 2.851-.617.109-2.08.092-2.743-.028-1.445-.257-2.817-.972-3.663-1.909-.331-.365-.977-1.32-.937-1.388.018-.023.166-.115.332-.212.16-.091.765-.44 1.337-.771l1.034-.6.217.32c.303.463.966 1.097 1.366 1.308 1.149.606 2.726.52 3.503-.177.331-.303.468-.617.468-1.08 0-.417-.05-.6-.268-.914-.28-.4-.852-.737-2.474-1.44-1.858-.8-2.658-1.297-3.389-2.086-.423-.457-.823-1.188-.988-1.8-.138-.508-.172-1.783-.063-2.297.383-1.794 1.737-3.046 3.691-3.417.634-.12 2.109-.074 2.731.08Z"
    />
  </svg>
);

export default SvgTypescriptIcon;
