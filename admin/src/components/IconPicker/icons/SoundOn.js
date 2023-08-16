import * as React from 'react';
function SvgSoundon(props, svgRef) {
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
        clipPath="url(#Sound_on_svg__Sound_on_svg__clip0_6109_45004)"
        clipRule="evenodd"
      >
        <path d="M14.47 2.55a.5.5 0 01.28.45v18a.5.5 0 01-.807.395L7.328 16.25H3A1.25 1.25 0 011.75 15V9A1.25 1.25 0 013 7.75h4.328l6.615-5.145a.5.5 0 01.527-.054zm-.72 1.472L7.807 8.645a.5.5 0 01-.307.105H3a.25.25 0 00-.25.25v6a.25.25 0 00.25.25h4.5a.5.5 0 01.307.105l5.943 4.623V4.022zM18 9.25a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0v-4.5a.5.5 0 01.5-.5zm3-1.5a.5.5 0 01.5.5v7.5a.5.5 0 01-1 0v-7.5a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="Sound_on_svg__Sound_on_svg__clip0_6109_45004">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoundon);
export default ForwardRef;
