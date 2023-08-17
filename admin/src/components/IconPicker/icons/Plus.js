import * as React from 'react';
function SvgPlus(props, svgRef) {
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
      <g clipPath="url(#Plus_svg__Plus_svg__clip0_1580_41361)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.5 3.75a.5.5 0 00-1 0v7.75H3.75a.5.5 0 000 1h7.75v7.75a.5.5 0 001 0V12.5h7.75a.5.5 0 000-1H12.5V3.75z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Plus_svg__Plus_svg__clip0_1580_41361">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPlus);
export default ForwardRef;
