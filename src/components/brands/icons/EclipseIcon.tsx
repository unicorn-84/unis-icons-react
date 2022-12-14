import * as React from 'react';
import { SVGProps } from 'react';

const SvgEclipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2C2255"
      d="M41.377 28.65c-.736 2.508-2.102 4.756-4.1 6.74l-.089.089c-2.495 2.48-5.401 3.966-8.715 4.466-.837.126-1.7.192-2.59.192-4.45 0-8.257-1.58-11.422-4.746-1.986-1.986-3.342-4.233-4.073-6.74h30.989Zm.622-3.748a16.73 16.73 0 0 1-.18 1.753l-.032.19H9.981c-.096-.57-.163-1.15-.2-1.744l-.01-.199h32.228Zm-.212-3.749c.096.57.163 1.152.2 1.745l.011.199H9.771c.029-.597.09-1.18.179-1.753l.03-.19h31.807Zm-.409-1.805c-.736-2.514-2.102-4.772-4.102-6.771-2.508-2.509-5.435-4.014-8.777-4.52a17.4 17.4 0 0 0-2.615-.196c-4.451 0-8.258 1.573-11.423 4.716-1.987 2-3.344 4.257-4.074 6.771"
    />
    <path
      fill="#F7941E"
      d="M8.812 24c0-8.513 6.394-15.587 14.712-16.831a16.034 16.034 0 0 0-.622-.016C13.568 7.153 6 14.696 6 24c0 9.305 7.567 16.847 16.902 16.847.209 0 .416-.008.623-.015C15.206 39.587 8.812 32.514 8.812 24Z"
    />
    <path
      fill="url(#eclipse-icon_svg__a)"
      d="M36.852 23.097a10.99 10.99 0 0 0-.334-1.944H15.25a10.97 10.97 0 0 0-.334 1.944h21.935Z"
    />
    <path
      fill="url(#eclipse-icon_svg__b)"
      d="M36.851 24.902H14.917c.054.666.166 1.316.334 1.944h21.267c.168-.628.28-1.278.333-1.944Z"
    />
    <path
      fill="url(#eclipse-icon_svg__c)"
      d="M25.884 35.007c4.417 0 8.224-2.602 9.977-6.356H15.908a11.007 11.007 0 0 0 9.976 6.356Z"
    />
    <path
      fill="#fff"
      d="M41.783 26.845c-.108.615-.25 1.218-.427 1.806H10.388a15.66 15.66 0 0 1-.408-1.806h31.803Zm.188-3.748c.017.31.029.623.029.938 0 .29-.009.58-.024.867H9.765a16.438 16.438 0 0 1-.024-.867c0-.315.012-.628.03-.938h32.2Zm-.72-3.749c.179.588.322 1.191.434 1.805H9.98c.111-.614.227-1.217.407-1.805H41.25Z"
    />
    <defs>
      <linearGradient
        id="eclipse-icon_svg__a"
        x1={25.884}
        x2={25.884}
        y1={42.328}
        y2={18.053}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.872} stopColor="#2C2255" />
      </linearGradient>
      <linearGradient
        id="eclipse-icon_svg__b"
        x1={25.884}
        x2={25.884}
        y1={42.328}
        y2={18.053}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.872} stopColor="#2C2255" />
      </linearGradient>
      <linearGradient
        id="eclipse-icon_svg__c"
        x1={25.884}
        x2={25.884}
        y1={42.328}
        y2={18.054}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.863} stopColor="#2C2255" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgEclipseIcon;
