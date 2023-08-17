import * as React from 'react';
function SvgStore(props, svgRef) {
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
        clipPath="url(#Store_svg__Store_svg__clip0_2279_53380)"
        clipRule="evenodd"
      >
        <path d="M1 18a.5.5 0 01.5-.5h21a.5.5 0 010 1h-21A.5.5 0 011 18zM22.989 4.395a.5.5 0 01-.384.594l-21 4.5a.5.5 0 11-.21-.978l21-4.5a.5.5 0 01.594.384z" />
        <path d="M6.25 12a.5.5 0 01.5-.5h10.5a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-5.5h-9.5V18a.5.5 0 01-1 0v-6z" />
        <path d="M6.25 15a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H6.75a.5.5 0 01-.5-.5zM3 8.179a.5.5 0 01.5.5V18a.5.5 0 01-1 0V8.68a.5.5 0 01.5-.5zm18-3.857a.5.5 0 01.5.5V18a.5.5 0 01-1 0V4.822a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="Store_svg__Store_svg__clip0_2279_53380">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStore);
export default ForwardRef;
