import * as React from 'react';
function SvgSearch(props, svgRef) {
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
      <g clipPath="url(#Search_svg__Search_svg__clip0_1218_15572)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 3.5a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1114 5.292l4.854 4.854a.5.5 0 01-.708.708l-4.854-4.855a8 8 0 01-13.292-6z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Search_svg__Search_svg__clip0_1218_15572">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSearch);
export default ForwardRef;
