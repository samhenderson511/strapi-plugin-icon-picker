import * as React from 'react';
function SvgFilter(props, svgRef) {
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
      <g clipPath="url(#Filter_svg__Filter_svg__clip0_2138_37619)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.75 5.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM7.045 7a2.75 2.75 0 015.41 0h7.795a.5.5 0 010 1h-7.795a2.751 2.751 0 01-5.41 0H3.75a.5.5 0 010-1h3.295zm8.705 7.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM13.045 16a2.75 2.75 0 015.41 0h1.795a.5.5 0 010 1h-1.795a2.75 2.75 0 01-5.41 0H3.75a.5.5 0 010-1h9.295z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Filter_svg__Filter_svg__clip0_2138_37619">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFilter);
export default ForwardRef;
