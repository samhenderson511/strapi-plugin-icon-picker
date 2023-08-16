import * as React from 'react';
function SvgPunctureresistance(props, svgRef) {
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
        d="M1.9 20.1a.5.5 0 01.5-.5h19.2a.5.5 0 010 1H2.4a.5.5 0 01-.5-.5zm8.3-16.7a.5.5 0 01.5.5v10.682l1.3 2.6 1.3-2.6V3.9a.5.5 0 011 0v10.8a.5.5 0 01-.053.224l-1.8 3.6a.5.5 0 01-.894 0l-1.8-3.6A.5.5 0 019.7 14.7V3.9a.5.5 0 01.5-.5zm6.954 11.546a.5.5 0 00-.708 0l-1.8 1.8a.5.5 0 00.707.707l1.8-1.8a.5.5 0 000-.707zm-10.308 0a.5.5 0 01.707 0l1.8 1.8a.5.5 0 01-.707.707l-1.8-1.8a.5.5 0 010-.707zM14.5 18.3a.5.5 0 01.5-.5h1.8a.5.5 0 010 1H15a.5.5 0 01-.5-.5zm-7.8 0a.5.5 0 01.5-.5H9a.5.5 0 010 1H7.2a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPunctureresistance);
export default ForwardRef;
