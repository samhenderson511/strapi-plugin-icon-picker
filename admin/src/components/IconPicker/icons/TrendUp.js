import * as React from 'react';
function SvgTrendup(props, svgRef) {
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
        clipPath="url(#Trend_up_svg__Trend_up_svg__clip0_6058_121751)"
        clipRule="evenodd"
      >
        <path d="M22.104 4.896a.5.5 0 010 .708l-9 9a.5.5 0 01-.708 0L9 11.207l-6.396 6.397a.5.5 0 01-.708-.708l6.75-6.75a.5.5 0 01.708 0l3.396 3.397 8.646-8.647a.5.5 0 01.708 0z" />
        <path d="M15.25 5.25a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-5.5h-5.5a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Trend_up_svg__Trend_up_svg__clip0_6058_121751">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrendup);
export default ForwardRef;
