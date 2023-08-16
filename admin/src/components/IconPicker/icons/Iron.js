import * as React from 'react';
function SvgIron(props, svgRef) {
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
        d="M8.5 6a.5.5 0 01.5-.5h7.875a.5.5 0 01.477.35l1.989 6.365a.43.43 0 01.007.022l1.754 5.614a.5.5 0 01-.477.649H3.375a.5.5 0 01-.5-.5A6.125 6.125 0 019 11.875h9.187L16.507 6.5H9a.5.5 0 01-.5-.5zm10 6.875H9A5.126 5.126 0 003.9 17.5h16.045L18.5 12.875z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12.75 15.188a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgIron);
export default ForwardRef;
