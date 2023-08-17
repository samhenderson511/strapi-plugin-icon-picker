import * as React from 'react';
function SvgGridPowershopper(props, svgRef) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#Grid-Power_shopper_svg__Grid-Power_shopper_svg__clip0_6221_116539)"
      >
        <path d="M9.75 4.5h-4.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm9 0h-4.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm-9 9h-4.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm9 0h-4.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75z" />
      </g>
      <defs>
        <clipPath id="Grid-Power_shopper_svg__Grid-Power_shopper_svg__clip0_6221_116539">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGridPowershopper);
export default ForwardRef;
