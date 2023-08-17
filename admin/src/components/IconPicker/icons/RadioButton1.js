import * as React from 'react';
function SvgRadiobutton1(props, svgRef) {
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
      <g clipPath="url(#Radio_button-1_svg__Radio_button-1_svg__clip0_6109_38766)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Radio_button-1_svg__Radio_button-1_svg__clip0_6109_38766">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRadiobutton1);
export default ForwardRef;
