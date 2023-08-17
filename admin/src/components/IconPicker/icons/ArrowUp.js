import * as React from 'react';
function SvgArrowUp(props, svgRef) {
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
        clipPath="url(#Arrow-Up_svg__Arrow-Up_svg__clip0_6103_31962)"
        clipRule="evenodd"
      >
        <path d="M12 20.75a.5.5 0 01-.5-.5V3.75a.5.5 0 011 0v16.5a.5.5 0 01-.5.5z" />
        <path d="M4.896 10.854a.5.5 0 010-.708l6.75-6.75a.5.5 0 01.708 0l6.75 6.75a.5.5 0 01-.708.708L12 4.457l-6.396 6.397a.5.5 0 01-.708 0z" />
      </g>
      <defs>
        <clipPath id="Arrow-Up_svg__Arrow-Up_svg__clip0_6103_31962">
          <path fill="currentColor" d="M0 0h24v24H0z" transform="rotate(-90 12 12)" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowUp);
export default ForwardRef;
