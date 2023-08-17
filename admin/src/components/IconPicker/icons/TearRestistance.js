import * as React from 'react';
function SvgTearrestistance(props, svgRef) {
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
        d="M1.9 2.4a.5.5 0 01.5-.5h7.8a.5.5 0 01.468.324l1.8 4.8a.5.5 0 01-.068.476l-3.324 4.432 3.547 3.152-1.091-2.909a.5.5 0 01.068-.475l3.436-4.581-1.704-4.544A.5.5 0 0113.8 1.9h7.8a.5.5 0 01.5.5v19.2a.5.5 0 01-.5.5H2.4a.5.5 0 01-.5-.5V2.4zm1 .5v18.2h18.2V2.9h-6.58l1.547 4.124A.5.5 0 0116 7.5l-3.436 4.58 1.704 4.544a.5.5 0 01-.8.55l-5.4-4.8A.5.5 0 018 11.7l3.436-4.581-1.583-4.22H2.9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTearrestistance);
export default ForwardRef;
