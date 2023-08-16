import * as React from 'react';
function SvgCompany(props, svgRef) {
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
      <g clipPath="url(#Company_svg__Company_svg__clip0_5235_124212)">
        <path
          fill="currentColor"
          d="M22.5 19.687h-1.688V9A1.313 1.313 0 0019.5 7.687h-6.188V3a1.313 1.313 0 00-2.04-1.091l-7.5 5A1.313 1.313 0 003.188 8v11.686H1.5a.563.563 0 000 1.125h21a.562.562 0 100-1.125zm-3-10.875a.188.188 0 01.188.188v10.687h-6.375V8.812H19.5zM4.312 8.001a.188.188 0 01.084-.156l7.5-5a.187.187 0 01.291.155v16.687H4.314V8.001zm6 2.499V12a.563.563 0 01-1.124 0v-1.5a.563.563 0 011.124 0zm-3 0V12a.563.563 0 11-1.125 0v-1.5a.563.563 0 011.125 0zm0 5.25v1.5a.563.563 0 11-1.125 0v-1.5a.563.563 0 011.125 0zm3 0v1.5a.563.563 0 01-1.124 0v-1.5a.563.563 0 011.124 0z"
        />
      </g>
      <defs>
        <clipPath id="Company_svg__Company_svg__clip0_5235_124212">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCompany);
export default ForwardRef;
