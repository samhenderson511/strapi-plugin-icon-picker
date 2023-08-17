import * as React from 'react';
function SvgRainproof(props, svgRef) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#Rainproof_svg__Rainproof_svg__clip0_1709_27673)"
      >
        <path d="M19.5 13.5c0-6.75-7.5-12-7.5-12s-7.5 5.25-7.5 12a7.5 7.5 0 0015 0zM12.75 18c1.875-.316 3.432-1.875 3.75-3.75" />
      </g>
      <defs>
        <clipPath id="Rainproof_svg__Rainproof_svg__clip0_1709_27673">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRainproof);
export default ForwardRef;
