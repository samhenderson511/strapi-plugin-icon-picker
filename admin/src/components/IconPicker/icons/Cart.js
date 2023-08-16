import * as React from 'react';
function SvgCart(props, svgRef) {
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
        clipPath="url(#Cart_svg__Cart_svg__clip0_1218_15588)"
        clipRule="evenodd"
      >
        <path d="M1 2.25a.5.5 0 01.5-.5h1.692a1.25 1.25 0 011.23 1.026L6.814 15.93a1 1 0 00.983.821h9.078a.5.5 0 010 1H7.797a2 2 0 01-1.967-1.642L3.438 2.955a.25.25 0 00-.246-.205H1.5a.5.5 0 01-.5-.5z" />
        <path d="M7.875 17.75a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zM5.5 19.125a2.375 2.375 0 114.75 0 2.375 2.375 0 01-4.75 0zm11.375-1.375a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zM14.5 19.125a2.375 2.375 0 114.75 0 2.375 2.375 0 01-4.75 0zM4 6a.5.5 0 01.5-.5h15.75a.5.5 0 01.492.59l-1.14 6.268A2 2 0 0117.634 14H5.864a.5.5 0 010-1h11.77a1 1 0 00.984-.821L19.651 6.5H4.5A.5.5 0 014 6z" />
      </g>
      <defs>
        <clipPath id="Cart_svg__Cart_svg__clip0_1218_15588">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCart);
export default ForwardRef;
