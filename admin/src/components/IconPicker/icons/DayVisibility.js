import * as React from 'react';
function SvgDayvisibility(props, svgRef) {
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
        clipPath="url(#Day_visibility_svg__Day_visibility_svg__clip0_6099_31812)"
        clipRule="evenodd"
      >
        <path d="M8.818 8.819a4.5 4.5 0 106.364 6.363A4.5 4.5 0 008.818 8.82zm-.707 7.07a5.5 5.5 0 117.778-7.778 5.5 5.5 0 01-7.778 7.779zM5.636 4.929a.5.5 0 10-.707.707l1.237 1.237a.5.5 0 00.708-.707L5.636 4.93zm12.198 12.197a.5.5 0 00-.707.708l1.237 1.237a.5.5 0 00.707-.707l-1.237-1.238zm-.707-10.253a.5.5 0 010-.707l1.237-1.237a.5.5 0 11.707.707l-1.237 1.237a.5.5 0 01-.707 0zM4.929 18.364a.5.5 0 10.707.707l1.238-1.237a.5.5 0 00-.708-.707L4.93 18.364zM2.5 11.5a.5.5 0 000 1h1.75a.5.5 0 000-1H2.5zm17.25 0a.5.5 0 000 1h1.75a.5.5 0 000-1h-1.75zM12 4.75a.5.5 0 01-.5-.5V2.5a.5.5 0 011 0v1.75a.5.5 0 01-.5.5zm-.5 16.75a.5.5 0 001 0v-1.75a.5.5 0 00-1 0v1.75z" />
      </g>
      <defs>
        <clipPath id="Day_visibility_svg__Day_visibility_svg__clip0_6099_31812">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDayvisibility);
export default ForwardRef;
