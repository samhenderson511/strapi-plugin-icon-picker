import * as React from 'react';
function SvgCheck(props, svgRef) {
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
      <g clipPath="url(#Check_svg__Check_svg__clip0_2395_66004)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.354 6.396a.5.5 0 010 .708l-12 12a.5.5 0 01-.708 0l-5.25-5.25a.5.5 0 01.708-.708L9 18.043 20.646 6.396a.5.5 0 01.708 0z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Check_svg__Check_svg__clip0_2395_66004">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCheck);
export default ForwardRef;
