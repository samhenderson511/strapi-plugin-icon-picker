import * as React from 'react';
function SvgArrowLeft(props, svgRef) {
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
        clipPath="url(#Arrow-Left_svg__Arrow-Left_svg__clip0_6103_31950)"
        clipRule="evenodd"
      >
        <path d="M20.75 12a.5.5 0 01-.5.5H3.75a.5.5 0 010-1h16.5a.5.5 0 01.5.5z" />
        <path d="M10.854 19.104a.5.5 0 01-.708 0l-6.75-6.75a.5.5 0 010-.708l6.75-6.75a.5.5 0 01.708.708L4.457 12l6.397 6.396a.5.5 0 010 .708z" />
      </g>
      <defs>
        <clipPath id="Arrow-Left_svg__Arrow-Left_svg__clip0_6103_31950">
          <path fill="currentColor" d="M0 0h24v24H0z" transform="rotate(-180 12 12)" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowLeft);
export default ForwardRef;
