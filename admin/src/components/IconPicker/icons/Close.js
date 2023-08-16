import * as React from 'react';
function SvgClose(props, svgRef) {
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
      <g clipPath="url(#Close_svg__Close_svg__clip0_1728_28009)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.104 5.604a.5.5 0 00-.708-.708L12 11.293 5.604 4.896a.5.5 0 10-.708.708L11.293 12l-6.397 6.396a.5.5 0 00.708.708L12 12.707l6.396 6.397a.5.5 0 00.708-.708L12.707 12l6.397-6.396z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Close_svg__Close_svg__clip0_1728_28009">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgClose);
export default ForwardRef;
