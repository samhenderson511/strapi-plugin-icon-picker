import * as React from 'react';
function SvgReturn(props, svgRef) {
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
        clipPath="url(#Return_svg__Return_svg__clip0_1877_50726)"
        clipRule="evenodd"
      >
        <path d="M7.854 10.896a.5.5 0 010 .708L3.707 15.75l4.147 4.146a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z" />
        <path d="M7 5.25a.5.5 0 01.5-.5h8.25a5.75 5.75 0 010 11.5H3a.5.5 0 010-1h12.75a4.75 4.75 0 100-9.5H7.5a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Return_svg__Return_svg__clip0_1877_50726">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReturn);
export default ForwardRef;
