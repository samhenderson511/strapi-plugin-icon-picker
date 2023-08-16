import * as React from 'react';
function SvgJpg(props, svgRef) {
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
        clipPath="url(#JPG_svg__JPG_svg__clip0_5256_124092)"
        clipRule="evenodd"
      >
        <path d="M5.25 3.5a.25.25 0 00-.25.25v6.75a.5.5 0 01-1 0V3.75A1.25 1.25 0 015.25 2.5h9a.5.5 0 01.354.146l5.25 5.25A.5.5 0 0120 8.25v2.25a.5.5 0 01-1 0V8.457L14.043 3.5H5.25z" />
        <path d="M14.25 2.5a.5.5 0 01.5.5v4.75h4.75a.5.5 0 010 1h-5.25a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5zm-5 11.75a.5.5 0 01.5-.5h1.5a2.375 2.375 0 110 4.75h-1v1a.5.5 0 01-1 0v-5.25zm1 3.25h1a1.375 1.375 0 000-2.75h-1v2.75zM18 14.75c-.897 0-1.75.877-1.75 2.125 0 1.247.852 2.123 1.747 2.125A1.574 1.574 0 0019 18.62v-.87h-.25a.5.5 0 010-1h.75a.5.5 0 01.5.5v1.582a.5.5 0 01-.132.338 2.575 2.575 0 01-1.862.83H18c-1.588 0-2.75-1.474-2.75-3.125 0-1.65 1.162-3.125 2.75-3.125h.002c.502.002.992.155 1.407.44a.5.5 0 01-.567.823 1.496 1.496 0 00-.843-.263zm-11.25-1a.5.5 0 01.5.5v3.563a2.187 2.187 0 11-4.375 0 .5.5 0 011 0 1.188 1.188 0 002.375 0V14.25a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="JPG_svg__JPG_svg__clip0_5256_124092">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgJpg);
export default ForwardRef;
