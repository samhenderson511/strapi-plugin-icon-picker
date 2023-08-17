import * as React from 'react';
function SvgPlayLine(props, svgRef) {
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
      <g clipPath="url(#Play-line_svg__Play-line_svg__clip0_6109_38863)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.897 2.655a1.25 1.25 0 011.252.026l.001.001 13.506 8.26v.001a1.233 1.233 0 010 2.109L8.15 21.312l-.001.001a1.251 1.251 0 01-1.899-1.045V3.727a1.25 1.25 0 01.647-1.072zm.608.845a.25.25 0 00-.255.242v16.51a.25.25 0 00.379.207l13.507-8.261.002-.001a.233.233 0 000-.4h-.002L7.63 3.537a.252.252 0 00-.125-.037z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Play-line_svg__Play-line_svg__clip0_6109_38863">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPlayLine);
export default ForwardRef;
