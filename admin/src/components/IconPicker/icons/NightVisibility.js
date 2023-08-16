import * as React from 'react';
function SvgNightvisibility(props, svgRef) {
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
        d="M7.801 6.59a.5.5 0 01.117.524 7 7 0 008.965 8.972.5.5 0 01.64.64A8 8 0 117.278 6.474a.5.5 0 01.523.117zM6.673 7.837a7 7 0 109.485 9.492 8 8 0 01-9.485-9.492zM16 4.5a.5.5 0 01.5.5A2.5 2.5 0 0019 7.5a.5.5 0 010 1 2.5 2.5 0 00-2.5 2.5.5.5 0 01-1 0A2.5 2.5 0 0013 8.5a.5.5 0 010-1A2.5 2.5 0 0015.5 5a.5.5 0 01.5-.5zm0 2.303A3.503 3.503 0 0114.803 8 3.503 3.503 0 0116 9.197 3.5 3.5 0 0117.197 8 3.503 3.503 0 0116 6.803z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNightvisibility);
export default ForwardRef;
