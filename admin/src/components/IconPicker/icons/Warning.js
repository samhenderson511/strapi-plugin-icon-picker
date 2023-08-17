import * as React from 'react';
function SvgWarning(props, svgRef) {
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
      <g fill="currentColor" clipPath="url(#Warning_svg__Warning_svg__clip0_5975_121780)">
        <path
          fillRule="evenodd"
          d="M12.918 4.02c-.399-.693-1.437-.693-1.835 0l-8.2 14.237c-.372.651.097 1.493.918 1.493h16.398c.82 0 1.29-.841.918-1.492l-8.2-14.238zm.866-.499c-.783-1.361-2.785-1.361-3.568 0l-8.2 14.238c-.777 1.356.24 2.991 1.785 2.991h16.398c1.546 0 2.561-1.635 1.785-2.99l-8.2-14.239z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12 9.25a.5.5 0 01.5.5v3.75a.5.5 0 11-1 0V9.75a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
        <path d="M12 18a1.125 1.125 0 100-2.25A1.125 1.125 0 0012 18z" />
      </g>
      <defs>
        <clipPath id="Warning_svg__Warning_svg__clip0_5975_121780">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWarning);
export default ForwardRef;
