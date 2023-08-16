import * as React from 'react';
function SvgGridInspirational(props, svgRef) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#Grid-Inspirational_svg__Grid-Inspirational_svg__clip0_6221_115562)"
      >
        <path d="M10.5 19.5v-15a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h3.75a.75.75 0 00.75-.75zm8.25 0v-15a.75.75 0 00-.75-.75h-3.75a.75.75 0 00-.75.75v15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75z" />
      </g>
      <defs>
        <clipPath id="Grid-Inspirational_svg__Grid-Inspirational_svg__clip0_6221_115562">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGridInspirational);
export default ForwardRef;
