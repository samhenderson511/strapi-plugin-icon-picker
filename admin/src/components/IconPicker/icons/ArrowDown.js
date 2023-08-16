import * as React from 'react';
function SvgArrowDown(props, svgRef) {
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
        clipPath="url(#Arrow-Down_svg__Arrow-Down_svg__clip0_6103_31956)"
        clipRule="evenodd"
      >
        <path d="M12 3.25a.5.5 0 01.5.5v16.5a.5.5 0 01-1 0V3.75a.5.5 0 01.5-.5z" />
        <path d="M19.104 13.146a.5.5 0 010 .708l-6.75 6.75a.5.5 0 01-.708 0l-6.75-6.75a.5.5 0 01.708-.708L12 19.543l6.396-6.397a.5.5 0 01.708 0z" />
      </g>
      <defs>
        <clipPath id="Arrow-Down_svg__Arrow-Down_svg__clip0_6103_31956">
          <path fill="currentColor" d="M0 0h24v24H0z" transform="rotate(90 12 12)" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowDown);
export default ForwardRef;
