import * as React from 'react';
function SvgDayNightvisibility(props, svgRef) {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.8 6.586a.5.5 0 01.116.524 7 7 0 008.968 8.967.5.5 0 01.64.64A8 8 0 117.275 6.47a.5.5 0 01.524.116zM6.671 7.834a7 7 0 109.488 9.487 8 8 0 01-9.488-9.487z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 6.247a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm-4.25 3.25a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zm4.25-7.5a.5.5 0 01.5.5v1.125a.5.5 0 01-1 0V2.497a.5.5 0 01.5-.5zm5.367 7.5a.5.5 0 01.5-.5h1.13a.5.5 0 010 1h-1.13a.5.5 0 01-.5-.5zM9.2 4.191a.5.5 0 01.706 0l.796.796a.5.5 0 01-.707.707l-.796-.796a.5.5 0 010-.707zm9.097 9.099a.5.5 0 01.708 0l.795.795a.5.5 0 11-.707.707l-.796-.795a.5.5 0 010-.707zm0-7.59a.5.5 0 010-.708l.8-.799a.5.5 0 11.707.707l-.8.8a.5.5 0 01-.707 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDayNightvisibility);
export default ForwardRef;
