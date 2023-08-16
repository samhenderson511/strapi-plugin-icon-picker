import * as React from 'react';
function SvgDonotbleach(props, svgRef) {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.021 3.021a.5.5 0 01.708 0l17.25 17.25a.5.5 0 01-.708.708L3.021 3.729a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.979 3.021a.5.5 0 00-.708 0l-17.25 17.25a.5.5 0 00.708.708l17.25-17.25a.5.5 0 000-.708z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.875a.5.5 0 01.425.236l8.625 13.875a.5.5 0 01-.425.764H3.375a.5.5 0 01-.425-.764l8.625-13.875A.5.5 0 0112 2.875zM4.275 16.75h15.45L12 4.322 4.275 16.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDonotbleach);
export default ForwardRef;
