import * as React from 'react';
function SvgHeadset(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1rem"
      height="1rem"
      ref={svgRef}
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#Headset_svg__Headset_svg__clip0_2279_53371)"
        clipRule="evenodd"
      >
        <path d="M21 18.25a.5.5 0 01.5.5v.75A3.5 3.5 0 0118 23h-5.25a.5.5 0 010-1H18a2.5 2.5 0 002.5-2.5v-.75a.5.5 0 01.5-.5z" />
        <path d="M8.365 3.223A9.5 9.5 0 0121.5 12v6.75a.5.5 0 01-.5.5h-3a2 2 0 01-2-2V13.5a2 2 0 012-2h2.485A8.502 8.502 0 005.99 5.99a8.5 8.5 0 00-2.475 5.51H6a2 2 0 012 2v3.75a2 2 0 01-2 2H4.5a2 2 0 01-2-2V12a9.5 9.5 0 015.865-8.777zM3.5 12.5v4.75a1 1 0 001 1H6a1 1 0 001-1V13.5a1 1 0 00-1-1H3.5zm17 0H18a1 1 0 00-1 1v3.75a1 1 0 001 1h2.5V12.5z" />
      </g>
      <defs>
        <clipPath id="Headset_svg__Headset_svg__clip0_2279_53371">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeadset);
export default ForwardRef;
