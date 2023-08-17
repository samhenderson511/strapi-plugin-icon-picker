import * as React from 'react';
function SvgFacebook(props, svgRef) {
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
        clipPath="url(#Facebook_svg__Facebook_svg__clip0_6099_31945)"
        clipRule="evenodd"
      >
        <path d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" />
        <path d="M12.306 8.555a2.75 2.75 0 011.944-.805h1.5a.5.5 0 010 1h-1.5a1.75 1.75 0 00-1.75 1.75V21a.5.5 0 01-1 0V10.5c0-.73.29-1.429.806-1.945z" />
        <path d="M8.5 13.5A.5.5 0 019 13h6a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Facebook_svg__Facebook_svg__clip0_6099_31945">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFacebook);
export default ForwardRef;
