import * as React from 'react';
function SvgChevronLeft(props, svgRef) {
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
      <g clipPath="url(#Chevron-left_svg__Chevron-left_svg__clip0_6099_5549)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 4.5l7.5 7.5L9 19.5"
        />
      </g>
      <defs>
        <clipPath id="Chevron-left_svg__Chevron-left_svg__clip0_6099_5549">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChevronLeft);
export default ForwardRef;
