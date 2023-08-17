import * as React from 'react';
function SvgLocation(props, svgRef) {
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
      <g clipPath="url(#Location_svg__Location_svg__clip0_3372_111067)">
        <path
          fill="currentColor"
          d="M12 1.5a8.26 8.26 0 00-8.25 8.25c0 7.06 7.5 12.39 7.82 12.614a.75.75 0 00.86 0c.32-.223 7.82-5.555 7.82-12.614A8.26 8.26 0 0012 1.5zm0 5.25a3 3 0 110 6 3 3 0 010-6z"
        />
      </g>
      <defs>
        <clipPath id="Location_svg__Location_svg__clip0_3372_111067">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLocation);
export default ForwardRef;
