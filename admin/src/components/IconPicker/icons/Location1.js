import * as React from 'react';
function SvgLocation1(props, svgRef) {
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
      <g clipPath="url(#Location-1_svg__Location-1_svg__clip0_6109_38843)">
        <path
          stroke="currentColor"
          d="M11.857 21.954h-.001c-.142-.1-2.06-1.46-3.936-3.658-1.883-2.206-3.67-5.19-3.67-8.546A7.76 7.76 0 0112 2a7.76 7.76 0 017.75 7.75c0 3.356-1.787 6.34-3.67 8.546-1.877 2.198-3.794 3.559-3.936 3.658h0a.25.25 0 01-.287 0zM13.945 6.84a3.5 3.5 0 10-3.89 5.82 3.5 3.5 0 003.89-5.82z"
        />
      </g>
      <defs>
        <clipPath id="Location-1_svg__Location-1_svg__clip0_6109_38843">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLocation1);
export default ForwardRef;
