import * as React from 'react';
function SvgHeart(props, svgRef) {
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
      <g clipPath="url(#Heart_svg__Heart_svg__clip0_1218_15576)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.313 4.25A4.562 4.562 0 002.75 8.813c0 1.414.558 2.806 1.439 4.118.88 1.312 2.062 2.515 3.261 3.54A30.84 30.84 0 0012 19.678l.167-.096a30.843 30.843 0 004.383-3.109c1.199-1.026 2.381-2.23 3.261-3.54.881-1.313 1.439-2.705 1.439-4.12a4.563 4.563 0 00-4.563-4.562c-1.933 0-3.552 1.048-4.224 2.69a.5.5 0 01-.926 0c-.672-1.642-2.291-2.69-4.225-2.69zm4.687 16l-.237.44-.003-.001-.006-.003-.022-.013a21.983 21.983 0 01-.403-.229 31.819 31.819 0 01-4.53-3.213c-1.238-1.06-2.493-2.33-3.44-3.743-.948-1.411-1.609-2.996-1.609-4.675A5.562 5.562 0 017.313 3.25c1.95 0 3.69.905 4.687 2.429.996-1.524 2.736-2.429 4.688-2.429a5.563 5.563 0 015.562 5.563c0 1.679-.66 3.264-1.608 4.675-.948 1.414-2.203 2.683-3.442 3.743a31.816 31.816 0 01-4.931 3.442l-.023.013-.006.003h-.002L12 20.25zm0 0l.238.44a.503.503 0 01-.475 0l.237-.44z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Heart_svg__Heart_svg__clip0_1218_15576">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeart);
export default ForwardRef;
