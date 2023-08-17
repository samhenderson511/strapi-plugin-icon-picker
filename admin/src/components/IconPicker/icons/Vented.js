import * as React from 'react';
function SvgVented(props, svgRef) {
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
        d="M2 12a.5.5 0 01.5-.5h19a.5.5 0 010 1h-19A.5.5 0 012 12zm6-1.5a.5.5 0 01-.5-.5V3a.5.5 0 011 0v7a.5.5 0 01-.5.5zM16 22a.5.5 0 01-.5-.5V14a.5.5 0 011 0v7.5a.5.5 0 01-.5.5zm0-11.5a.5.5 0 01-.5-.5V9a.5.5 0 011 0v1a.5.5 0 01-.5.5zm-8 5a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.646 4.854a.5.5 0 010-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8 3.207 6.354 4.854a.5.5 0 01-.708 0zm12.708 14.292a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L16 20.793l1.646-1.647a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgVented);
export default ForwardRef;
