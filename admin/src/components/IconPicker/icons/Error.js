import * as React from 'react';
function SvgError(props, svgRef) {
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
      <g fill="currentColor" clipPath="url(#Error_svg__Error_svg__clip0_3259_109207)">
        <path
          fillRule="evenodd"
          d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12 7a.5.5 0 01.5.5v5.25a.5.5 0 01-1 0V7.5A.5.5 0 0112 7z"
          clipRule="evenodd"
        />
        <path d="M12 17.25A1.125 1.125 0 1012 15a1.125 1.125 0 000 2.25z" />
      </g>
      <defs>
        <clipPath id="Error_svg__Error_svg__clip0_3259_109207">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgError);
export default ForwardRef;
