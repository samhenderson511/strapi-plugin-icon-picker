import * as React from 'react';
function SvgZoomOut(props, svgRef) {
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
        clipPath="url(#Zoom-out_svg__Zoom-out_svg__clip0_6109_38801)"
        clipRule="evenodd"
      >
        <path d="M7 10.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
        <path d="M10.5 3.5a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" />
        <path d="M15.451 15.451a.5.5 0 01.707 0l5.197 5.197a.5.5 0 11-.707.707l-5.197-5.197a.5.5 0 010-.707z" />
      </g>
      <defs>
        <clipPath id="Zoom-out_svg__Zoom-out_svg__clip0_6109_38801">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgZoomOut);
export default ForwardRef;
