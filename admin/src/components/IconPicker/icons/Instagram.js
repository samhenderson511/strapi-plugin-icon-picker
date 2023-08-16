import * as React from 'react';
function SvgInstagram(props, svgRef) {
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
      <g fill="currentColor" clipPath="url(#Instagram_svg__Instagram_svg__clip0_6099_31943)">
        <path
          fillRule="evenodd"
          d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM7.75 12a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M7.5 3.5a4 4 0 00-4 4v9a4 4 0 004 4h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zm-5 4a5 5 0 015-5h9a5 5 0 015 5v9a5 5 0 01-5 5h-9a5 5 0 01-5-5v-9z"
          clipRule="evenodd"
        />
        <path d="M16.875 7.875a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </g>
      <defs>
        <clipPath id="Instagram_svg__Instagram_svg__clip0_6099_31943">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgInstagram);
export default ForwardRef;
