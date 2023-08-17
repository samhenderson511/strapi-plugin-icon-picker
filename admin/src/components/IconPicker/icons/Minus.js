import * as React from 'react';
function SvgMinus(props, svgRef) {
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
      <g clipPath="url(#Minus_svg__Minus_svg__clip0_1728_28652)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.25 12a.5.5 0 01.5-.5h16.5a.5.5 0 010 1H3.75a.5.5 0 01-.5-.5z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Minus_svg__Minus_svg__clip0_1728_28652">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMinus);
export default ForwardRef;
