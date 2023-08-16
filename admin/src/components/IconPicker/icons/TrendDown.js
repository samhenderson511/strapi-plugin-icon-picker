import * as React from 'react';
function SvgTrenddown(props, svgRef) {
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
        clipPath="url(#Trend_down_svg__Trend_down_svg__clip0_6058_121745)"
        clipRule="evenodd"
      >
        <path d="M1.896 6.396a.5.5 0 01.708 0L9 12.793l3.396-3.397a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-8.646-8.647-3.396 3.397a.5.5 0 01-.708 0l-6.75-6.75a.5.5 0 010-.708z" />
        <path d="M21.75 12.25a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 010-1h5.5v-5.5a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="Trend_down_svg__Trend_down_svg__clip0_6058_121745">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrenddown);
export default ForwardRef;
