import * as React from 'react';
function SvgDownload(props, svgRef) {
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
        clipPath="url(#Download_svg__Download_svg__clip0_5058_123405)"
        clipRule="evenodd"
      >
        <path d="M12 3.25a.5.5 0 01.5.5v10.5a.5.5 0 01-1 0V3.75a.5.5 0 01.5-.5z" />
        <path d="M3.75 13.75a.5.5 0 01.5.5v5.25a.25.25 0 00.25.25h15a.25.25 0 00.25-.25v-5.25a.5.5 0 011 0v5.25a1.25 1.25 0 01-1.25 1.25h-15a1.25 1.25 0 01-1.25-1.25v-5.25a.5.5 0 01.5-.5z" />
        <path d="M7.896 10.146a.5.5 0 01.708 0L12 13.543l3.396-3.397a.5.5 0 01.708.708l-3.75 3.75a.5.5 0 01-.708 0l-3.75-3.75a.5.5 0 010-.708z" />
      </g>
      <defs>
        <clipPath id="Download_svg__Download_svg__clip0_5058_123405">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDownload);
export default ForwardRef;
