import * as React from 'react';
function SvgSignout(props, svgRef) {
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
        clipPath="url(#Sign_out_svg__Sign_out_svg__clip0_4790_120699)"
        clipRule="evenodd"
      >
        <path d="M20.384 20.384a1.25 1.25 0 01-.884.366h-5.25a.5.5 0 010-1h5.25a.25.25 0 00.25-.25v-15a.25.25 0 00-.25-.25h-5.25a.5.5 0 010-1h5.25a1.25 1.25 0 011.25 1.25v15c0 .331-.132.65-.366.884z" />
        <path d="M14.75 12a.5.5 0 01-.5.5H3.75a.5.5 0 010-1h10.5a.5.5 0 01.5.5z" />
        <path d="M7.854 16.104a.5.5 0 01-.708 0l-3.75-3.75a.5.5 0 010-.708l3.75-3.75a.5.5 0 11.708.708L4.457 12l3.397 3.396a.5.5 0 010 .708z" />
      </g>
      <defs>
        <clipPath id="Sign_out_svg__Sign_out_svg__clip0_4790_120699">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSignout);
export default ForwardRef;
