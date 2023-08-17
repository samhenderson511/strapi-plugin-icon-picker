import * as React from 'react';
function SvgInsights(props, svgRef) {
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
        clipPath="url(#Insights_svg__Insights_svg__clip0_5992_122400)"
        clipRule="evenodd"
      >
        <path d="M3 4a.5.5 0 01.5.5V19H21a.5.5 0 010 1H3a.5.5 0 01-.5-.5v-15A.5.5 0 013 4z" />
        <path d="M21.376 8.67a.5.5 0 01-.047.706l-6 5.25a.5.5 0 01-.629.024l-5.676-4.257-5.695 4.983a.5.5 0 01-.658-.752l6-5.25A.5.5 0 019.3 9.35l5.676 4.257 5.695-4.983a.5.5 0 01.705.047z" />
      </g>
      <defs>
        <clipPath id="Insights_svg__Insights_svg__clip0_5992_122400">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgInsights);
export default ForwardRef;
