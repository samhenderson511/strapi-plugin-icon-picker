import * as React from 'react';
function SvgStore2(props, svgRef) {
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
        clipPath="url(#Store_2_svg__Store_2_svg__clip0_6221_109551)"
        clipRule="evenodd"
      >
        <path d="M4.5 12.59a.5.5 0 01.5.5v6.413a.25.25 0 00.25.25h13.5a.25.25 0 00.25-.25V13.09a.5.5 0 011 0v6.413a1.25 1.25 0 01-1.25 1.25H5.25A1.25 1.25 0 014 19.503V13.09a.5.5 0 01.5-.5zm.563-9.34h13.875a1.25 1.25 0 011.201.906l1.342 4.707A.5.5 0 0121 9.5H3a.5.5 0 01-.48-.637l1.344-4.707A1.25 1.25 0 015.06 3.25h.002zm0 1a.25.25 0 00-.238.181L3.663 8.5h16.675l-1.16-4.069a.25.25 0 00-.24-.181H5.063z" />
        <path d="M3 8.5a.5.5 0 01.5.5v1.5a2.5 2.5 0 005 0V9a.5.5 0 011 0v1.5a3.5 3.5 0 11-7 0V9a.5.5 0 01.5-.5z" />
        <path d="M9 8.5a.5.5 0 01.5.5v1.5a2.5 2.5 0 005 0V9a.5.5 0 011 0v1.5a3.5 3.5 0 11-7 0V9a.5.5 0 01.5-.5z" />
        <path d="M15 8.5a.5.5 0 01.5.5v1.5a2.5 2.5 0 005 0V9a.5.5 0 011 0v1.5a3.5 3.5 0 11-7 0V9a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="Store_2_svg__Store_2_svg__clip0_6221_109551">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStore2);
export default ForwardRef;
