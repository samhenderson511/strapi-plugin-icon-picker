import * as React from 'react';
function SvgAccountoveview(props, svgRef) {
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
        clipPath="url(#Account_oveview_svg__Account_oveview_svg__clip0_4790_120701)"
        clipRule="evenodd"
      >
        <path d="M5.25 5a.25.25 0 00-.25.25v13.5c0 .138.112.25.25.25h13.5a.25.25 0 00.25-.25V5.25a.25.25 0 00-.25-.25H5.25zM4 5.25C4 4.56 4.56 4 5.25 4h13.5c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 20 4 19.44 4 18.75V5.25z" />
        <path d="M11 4a.5.5 0 01.5.5v15a.5.5 0 01-1 0v-15A.5.5 0 0111 4z" />
        <path d="M4.5 7.5A.5.5 0 015 7h5.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0 3A.5.5 0 015 10h5.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0 3A.5.5 0 015 13h5.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0 3A.5.5 0 015 16h5.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Account_oveview_svg__Account_oveview_svg__clip0_4790_120701">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAccountoveview);
export default ForwardRef;
