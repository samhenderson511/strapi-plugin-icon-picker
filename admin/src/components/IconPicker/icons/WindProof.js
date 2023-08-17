import * as React from 'react';
function SvgWindproof(props, svgRef) {
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
        d="M9 22a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zm3 0a.5.5 0 01-.5-.5v-17a.5.5 0 011 0v17a.5.5 0 01-.5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 12a2.5 2.5 0 012.5 2.5h-1A1.5 1.5 0 007 13v-1zm-2.5 2.5A2.5 2.5 0 017 12v1a1.5 1.5 0 00-1.5 1.5h-1zm3 2a.5.5 0 01-.5.5 2.5 2.5 0 01-2.5-2.5h1A1.5 1.5 0 007 16a.5.5 0 01.5.5zM15 22a.5.5 0 01-.5-.5v-12a.5.5 0 011 0v12a.5.5 0 01-.5.5zm2-15a2.5 2.5 0 012.5 2.5h-1A1.5 1.5 0 0017 8V7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 9.5A2.5 2.5 0 0117 7v1a1.5 1.5 0 00-1.5 1.5h-1zm5 0A2.5 2.5 0 0117 12a.5.5 0 010-1 1.5 1.5 0 001.5-1.5h1zM10 2a2.5 2.5 0 012.5 2.5h-1A1.5 1.5 0 0010 3V2zM7.5 4.5A2.5 2.5 0 0110 2v1a1.5 1.5 0 00-1.5 1.5h-1zm3 2a.5.5 0 01-.5.5 2.5 2.5 0 01-2.5-2.5h1A1.5 1.5 0 0010 6a.5.5 0 01.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWindproof);
export default ForwardRef;
