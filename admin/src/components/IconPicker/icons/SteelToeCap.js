import * as React from 'react';
function SvgSteeltoecap(props, svgRef) {
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
        d="M17.5 3a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.007 5.418A.5.5 0 0114.5 5h6a.5.5 0 01.493.418l1 6A.5.5 0 0121.5 12h-8a.5.5 0 01-.493-.582l1-6zm.917.582l-.834 5h6.82l-.833-5h-5.153zM2 19.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v1a1.5 1.5 0 01-1.5 1.5h-12a.5.5 0 010-1h12a.5.5 0 00.5-.5V20H2.5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.017 12.37a.5.5 0 01.613-.353l10.78 2.902A3.5 3.5 0 0116 18.3v1.204a.5.5 0 01-.5.5h-13a.5.5 0 110-1H15V18.3a2.5 2.5 0 00-1.85-2.414L2.37 12.983a.5.5 0 01-.353-.613z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 14.422a.5.5 0 01.5.5v4.58a.5.5 0 11-1 0v-4.58a.5.5 0 01.5-.5zm-3-.445v1.5a.5.5 0 01-1 0v-1.5h1zm-2-.539v1.5a.5.5 0 01-1 0v-1.5h1zm-2-.54v1.5a.5.5 0 11-1 0v-1.5h1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSteeltoecap);
export default ForwardRef;
