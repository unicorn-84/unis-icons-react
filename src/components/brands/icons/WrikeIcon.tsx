import * as React from 'react';
import { SVGProps } from 'react';

const SvgWrikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#08CF65"
      d="M14.445 20.899c1.728 0 2.552.332 3.822 1.602l6.774 6.9c.195.206.23.286.275.412a.34.34 0 0 1 .023.138c0 .045 0 .114-.023.148-.034.115-.08.206-.275.412l-4.634 4.726c-.206.206-.286.24-.4.287-.047.023-.104.023-.138.023-.046 0-.114 0-.149-.023-.114-.046-.194-.08-.4-.287L6.205 21.883c-.377-.39-.229-.984.4-.984h7.84Zm19.11-8.423c-1.75 0-2.563.332-3.833 1.602l-6.775 6.9c-.194.207-.229.287-.274.413-.023.034-.023.103-.023.137 0 .046 0 .115.023.149.034.114.08.206.274.4l4.635 4.715c.194.206.274.252.4.286.035.023.103.023.138.023.045 0 .103 0 .148-.023.115-.034.195-.08.401-.286l13.126-13.354c.377-.39.228-.985-.4-.985h-7.84v.023Z"
    />
  </svg>
);

export default SvgWrikeIcon;
