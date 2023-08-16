import * as React from 'react';
function SvgChevronDown(props, svgRef) {
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
      <g clipPath="url(#Chevron-down_svg__Chevron-down_svg__clip0_1315_32030)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.854 8.646a.5.5 0 010 .708l-7.5 7.5a.5.5 0 01-.708 0l-7.5-7.5a.5.5 0 11.708-.708L12 15.793l7.146-7.147a.5.5 0 01.708 0z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Chevron-down_svg__Chevron-down_svg__clip0_1315_32030">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChevronDown);
export default ForwardRef;
