import * as React from 'react';
function SvgArrowRight(props, svgRef) {
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
        clipPath="url(#Arrow-Right_svg__Arrow-Right_svg__clip0_1315_27920)"
        clipRule="evenodd"
      >
        <path d="M3.25 12a.5.5 0 01.5-.5h16.5a.5.5 0 010 1H3.75a.5.5 0 01-.5-.5z" />
        <path d="M13.146 4.896a.5.5 0 01.708 0l6.75 6.75a.5.5 0 010 .708l-6.75 6.75a.5.5 0 01-.708-.708L19.543 12l-6.397-6.396a.5.5 0 010-.708z" />
      </g>
      <defs>
        <clipPath id="Arrow-Right_svg__Arrow-Right_svg__clip0_1315_27920">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowRight);
export default ForwardRef;
