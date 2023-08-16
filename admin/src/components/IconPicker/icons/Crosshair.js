import * as React from 'react';
function SvgCrosshair(props, svgRef) {
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
        clipPath="url(#Crosshair_svg__Crosshair_svg__clip0_3976_127566)"
        clipRule="evenodd"
      >
        <path d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" />
        <path d="M12 2.5a.5.5 0 01.5.5v3.75a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zm0 14.25a.5.5 0 01.5.5V21a.5.5 0 01-1 0v-3.75a.5.5 0 01.5-.5zM2.5 12a.5.5 0 01.5-.5h3.75a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm14.25 0a.5.5 0 01.5-.5H21a.5.5 0 010 1h-3.75a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Crosshair_svg__Crosshair_svg__clip0_3976_127566">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCrosshair);
export default ForwardRef;
