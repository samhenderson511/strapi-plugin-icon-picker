import * as React from 'react';
function SvgDonottumbledry(props, svgRef) {
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
        d="M12 6.125a5.875 5.875 0 100 11.75 5.875 5.875 0 000-11.75zM5.125 12a6.875 6.875 0 1113.75 0 6.875 6.875 0 01-13.75 0z"
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
        d="M2.875 3.375a.5.5 0 01.5-.5h17.25a.5.5 0 01.5.5v17.25a.5.5 0 01-.5.5H3.375a.5.5 0 01-.5-.5V3.375zm1 .5v16.25h16.25V3.875H3.875z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.979 3.021a.5.5 0 010 .708l-17.25 17.25a.5.5 0 01-.708-.708l17.25-17.25a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDonottumbledry);
export default ForwardRef;
