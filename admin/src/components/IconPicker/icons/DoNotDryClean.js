import * as React from 'react';
function SvgDonotdryclean(props, svgRef) {
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
        d="M12 3.875a8.125 8.125 0 100 16.25 8.125 8.125 0 000-16.25zM2.875 12a9.125 9.125 0 1118.25 0 9.125 9.125 0 01-18.25 0z"
        clipRule="evenodd"
      />
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
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDonotdryclean);
export default ForwardRef;
