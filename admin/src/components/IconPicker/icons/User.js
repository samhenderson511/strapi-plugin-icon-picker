import * as React from 'react';
function SvgUser(props, svgRef) {
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
        clipPath="url(#User_svg__User_svg__clip0_1218_15581)"
        clipRule="evenodd"
      >
        <path d="M12 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM5.5 9a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
        <path d="M12 15.5c-3.695 0-6.834 2.006-8.567 5a.5.5 0 11-.866-.5c1.9-3.282 5.356-5.5 9.433-5.5s7.534 2.218 9.433 5.5a.5.5 0 11-.866.5c-1.733-2.994-4.872-5-8.567-5z" />
      </g>
      <defs>
        <clipPath id="User_svg__User_svg__clip0_1218_15581">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUser);
export default ForwardRef;
