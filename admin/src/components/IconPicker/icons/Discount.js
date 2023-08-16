import * as React from 'react';
function SvgDiscount(props, svgRef) {
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
        clipPath="url(#Discount_svg__Discount_svg__clip0_6065_121802)"
        clipRule="evenodd"
      >
        <path d="M3 5.75a.256.256 0 00-.25.25v3.041A2.994 2.994 0 015.25 12a2.994 2.994 0 01-2.5 2.959V18c0 .14.112.25.25.25h18c.144 0 .25-.106.25-.25v-3.041a3.002 3.002 0 010-5.917V6c0-.138-.11-.25-.25-.25H3zM1.75 6c0-.686.564-1.25 1.25-1.25h18c.7 0 1.25.568 1.25 1.25v3.5a.5.5 0 01-.5.5 2 2 0 000 4 .5.5 0 01.5.5V18c0 .696-.554 1.25-1.25 1.25H3A1.25 1.25 0 011.75 18v-3.5a.5.5 0 01.5-.5c1.105 0 2-.887 2-2s-.895-2-2-2a.5.5 0 01-.5-.5V6z" />
        <path d="M16.354 7.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0zM9.5 8.5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm7 4a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
      </g>
      <defs>
        <clipPath id="Discount_svg__Discount_svg__clip0_6065_121802">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDiscount);
export default ForwardRef;
