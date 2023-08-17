import * as React from 'react';
function SvgUsers1(props, svgRef) {
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
        clipPath="url(#Users-1_svg__Users-1_svg__clip0_6058_121731)"
        clipRule="evenodd"
      >
        <path d="M20.292 12.29A5.117 5.117 0 0018 11.75a.5.5 0 010-1 6.117 6.117 0 014.9 2.45.5.5 0 11-.8.6 5.115 5.115 0 00-1.808-1.51zM12 10.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM7.75 13.5a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z" />
        <path d="M12 17.75a5.594 5.594 0 00-4.82 2.754.5.5 0 11-.86-.508 6.593 6.593 0 0111.36 0 .5.5 0 11-.86.508A5.595 5.595 0 0012 17.75zm6.865-11.845a2.5 2.5 0 00-3.287 1.72.5.5 0 11-.968-.25A3.5 3.5 0 1118 11.75a.5.5 0 010-1 2.5 2.5 0 00.865-4.845zM6 11.75a5.117 5.117 0 00-4.1 2.05.5.5 0 01-.8-.6A6.117 6.117 0 016 10.75a.5.5 0 110 1z" />
        <path d="M6.506 5.801A2.5 2.5 0 106 10.75a.5.5 0 110 1 3.5 3.5 0 113.39-4.375.5.5 0 11-.968.25 2.5 2.5 0 00-1.916-1.824z" />
      </g>
      <defs>
        <clipPath id="Users-1_svg__Users-1_svg__clip0_6058_121731">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUsers1);
export default ForwardRef;
