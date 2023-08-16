import * as React from 'react';
function SvgTrash(props, svgRef) {
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
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#Trash_svg__Trash_svg__clip0_2433_73642)"
        clipRule="evenodd"
      >
        <path d="M3.25 5.25a.5.5 0 01.5-.5h16.5a.5.5 0 010 1H3.75a.5.5 0 01-.5-.5zm6.5 4a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-6a.5.5 0 01.5-.5zm4.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-6a.5.5 0 01.5-.5z" />
        <path d="M5.25 4.75a.5.5 0 01.5.5V19.5a.25.25 0 00.25.25h12a.25.25 0 00.25-.25V5.25a.5.5 0 011 0V19.5A1.25 1.25 0 0118 20.75H6a1.25 1.25 0 01-1.25-1.25V5.25a.5.5 0 01.5-.5z" />
        <path d="M8.336 2.336A2 2 0 019.75 1.75h4.5a2 2 0 012 2v1.5a.5.5 0 01-1 0v-1.5a1 1 0 00-1-1h-4.5a1 1 0 00-1 1v1.5a.5.5 0 01-1 0v-1.5a2 2 0 01.586-1.414z" />
      </g>
      <defs>
        <clipPath id="Trash_svg__Trash_svg__clip0_2433_73642">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrash);
export default ForwardRef;
