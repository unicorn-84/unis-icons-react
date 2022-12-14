import * as React from 'react';
import { SVGProps } from 'react';

const SvgGear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.963 8.137c.316.292.616.592.9.9l3.412.488c.556.966.985 2 1.275 3.075l-2.075 2.763s.038.85 0 1.274L28.55 19.4a12.778 12.778 0 0 1-1.275 3.075l-3.412.487s-.588.613-.9.9l-.488 3.413A12.87 12.87 0 0 1 19.4 28.55l-2.762-2.075a7.24 7.24 0 0 1-1.275 0L12.6 28.55a12.776 12.776 0 0 1-3.075-1.275l-.487-3.413a22.88 22.88 0 0 1-.9-.9l-3.413-.487c-.556-.966-.984-2-1.275-3.075l2.075-2.762s-.037-.85 0-1.276L3.45 12.6c.29-1.076.718-2.11 1.275-3.075l3.413-.488c.291-.308.591-.608.9-.9l.487-3.412c.966-.556 2-.985 3.075-1.275l2.763 2.075c.424-.038.85-.038 1.275 0L19.4 3.45c1.076.289 2.11.718 3.075 1.275l.488 3.412Z"
    />
  </svg>
);

export default SvgGear;
