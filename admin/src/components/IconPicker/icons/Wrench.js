import * as React from 'react';
function SvgWrench(props, svgRef) {
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
      <g clipPath="url(#Wrench_svg__Wrench_svg__clip0_6109_46365)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.352 3.67a5.5 5.5 0 00-6.168 7.99.5.5 0 01-.111.62l-6.08 5.243a1.754 1.754 0 002.481 2.48l5.243-6.078a.5.5 0 01.62-.111 5.5 5.5 0 007.991-6.168l-3.493 3.223a.5.5 0 01-.444.121l-2.47-.53a.5.5 0 01-.383-.384l-.53-2.47a.5.5 0 01.12-.444l3.224-3.493zm-2.841-.998a6.5 6.5 0 013.922.302.5.5 0 01.18.802L14.04 7.65l.409 1.9 1.9.408 3.873-3.574a.5.5 0 01.803.18 6.5 6.5 0 01-8.807 8.311l-4.999 5.797a2.754 2.754 0 11-3.893-3.893l5.797-5a6.5 6.5 0 014.389-9.107z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Wrench_svg__Wrench_svg__clip0_6109_46365">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWrench);
export default ForwardRef;
