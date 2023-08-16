import * as React from 'react';
function SvgCards(props, svgRef) {
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
        clipPath="url(#Cards_svg__Cards_svg__clip0_6109_46366)"
        clipRule="evenodd"
      >
        <path d="M3.75 8a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h13.5a.25.25 0 00.25-.25V8.25a.25.25 0 00-.25-.25H3.75zm-1.25.25C2.5 7.56 3.06 7 3.75 7h13.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V8.25z" />
        <path d="M5.5 4.5A.5.5 0 016 4h14.25a1.25 1.25 0 011.25 1.25V16.5a.5.5 0 01-1 0V5.25a.25.25 0 00-.25-.25H6a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Cards_svg__Cards_svg__clip0_6109_46366">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCards);
export default ForwardRef;
