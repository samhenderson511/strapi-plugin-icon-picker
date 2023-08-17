import * as React from 'react';
function SvgPlayFiled(props, svgRef) {
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
      <g fill="currentColor" clipPath="url(#Play-filed_svg__Play-filed_svg__clip0_6221_109340)">
        <path d="M6.75 3.736V20.26a.75.75 0 001.14.627l13.507-8.261a.733.733 0 000-1.255L7.889 3.11a.75.75 0 00-1.139.627z" />
        <path
          fillRule="evenodd"
          d="M6.897 2.655a1.25 1.25 0 011.252.026l.001.001 13.506 8.26v.001a1.233 1.233 0 010 2.109L8.15 21.312l-.001.001a1.251 1.251 0 01-1.899-1.045V3.727a1.25 1.25 0 01.647-1.072zm.608.845a.25.25 0 00-.255.242v16.51a.25.25 0 00.379.207l13.507-8.261.002-.001a.233.233 0 000-.4h-.002L7.63 3.537a.252.252 0 00-.125-.037z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Play-filed_svg__Play-filed_svg__clip0_6221_109340">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPlayFiled);
export default ForwardRef;
