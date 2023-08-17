import * as React from 'react';
function SvgChevronRight(props, svgRef) {
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
      <g clipPath="url(#Chevron-right_svg__Chevron-right_svg__clip0_1781_29408)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.646 4.146a.5.5 0 01.708 0l7.5 7.5a.5.5 0 010 .708l-7.5 7.5a.5.5 0 01-.708-.708L15.793 12 8.646 4.854a.5.5 0 010-.708z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Chevron-right_svg__Chevron-right_svg__clip0_1781_29408">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChevronRight);
export default ForwardRef;
