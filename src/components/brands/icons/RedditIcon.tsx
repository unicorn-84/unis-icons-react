import * as React from 'react';
import { SVGProps } from 'react';

const SvgRedditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FC471E"
      d="M24 3C12.417 3 3 12.417 3 24s9.417 21 21 21 21-9.417 21-21S35.583 3 24 3Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.02 8.91a1.58 1.58 0 0 0-.02.246c0 .848.672 1.536 1.5 1.536s1.5-.688 1.5-1.536c0-.848-.672-1.535-1.5-1.535-.37 0-.707.136-.968.363L16.636 7l-1.408 5.765c-1.873.126-3.557.707-4.828 1.583a1.97 1.97 0 0 0-1.4-.585c-1.105 0-2 .917-2 2.047 0 .787.434 1.47 1.07 1.813-.046.244-.07.494-.07.747C8 21.48 11.582 24 16 24s8-2.52 8-5.63c0-.253-.024-.503-.07-.747A2.054 2.054 0 0 0 25 15.81c0-1.13-.895-2.047-2-2.047a1.97 1.97 0 0 0-1.4.585c-1.385-.955-3.26-1.558-5.335-1.606l1.099-4.5 2.655.668Zm-7.52 9.97c.828 0 1.5-.687 1.5-1.535 0-.848-.672-1.536-1.5-1.536s-1.5.688-1.5 1.536c0 .848.672 1.535 1.5 1.535Zm7 0c.828 0 1.5-.687 1.5-1.535 0-.848-.672-1.536-1.5-1.536s-1.5.688-1.5 1.536c0 .848.672 1.535 1.5 1.535Zm-6.723 1.622a.493.493 0 0 0-.693.142.52.52 0 0 0 .139.71c1.088.742 2.432 1.114 3.777 1.114 1.345 0 2.69-.372 3.777-1.114a.52.52 0 0 0 .139-.71.493.493 0 0 0-.693-.142c-.92.628-2.072.942-3.223.942-.683 0-1.366-.11-2-.331a5.204 5.204 0 0 1-1.223-.611Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRedditIcon;
