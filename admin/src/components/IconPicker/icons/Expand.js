import * as React from 'react';
function SvgExpand(props, svgRef) {
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
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#Expand_svg__Expand_svg__clip0_5231_124171)"
        clipRule="evenodd"
      >
        <path d="M14.5 4.5A.5.5 0 0115 4h4.5a.5.5 0 01.5.5V9a.5.5 0 01-1 0V5h-4a.5.5 0 01-.5-.5z" />
        <path d="M19.854 4.146a.5.5 0 010 .708l-5.25 5.25a.5.5 0 01-.708-.708l5.25-5.25a.5.5 0 01.708 0zM4.5 14.5a.5.5 0 01.5.5v4h4a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5V15a.5.5 0 01.5-.5z" />
        <path d="M10.104 13.896a.5.5 0 010 .708l-5.25 5.25a.5.5 0 01-.708-.708l5.25-5.25a.5.5 0 01.708 0zm9.396.604a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h4v-4a.5.5 0 01.5-.5z" />
        <path d="M13.896 13.896a.5.5 0 01.708 0l5.25 5.25a.5.5 0 01-.708.708l-5.25-5.25a.5.5 0 010-.708zM4 4.5a.5.5 0 01.5-.5H9a.5.5 0 010 1H5v4a.5.5 0 01-1 0V4.5z" />
        <path d="M4.146 4.146a.5.5 0 01.708 0l5.25 5.25a.5.5 0 01-.708.708l-5.25-5.25a.5.5 0 010-.708z" />
      </g>
      <defs>
        <clipPath id="Expand_svg__Expand_svg__clip0_5231_124171">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgExpand);
export default ForwardRef;
