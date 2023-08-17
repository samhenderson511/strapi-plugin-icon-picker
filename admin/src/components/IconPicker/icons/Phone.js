import * as React from 'react';
function SvgPhone(props, svgRef) {
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
      <g clipPath="url(#Phone_svg__Phone_svg__clip0_2279_53384)">
        <path
          fill="currentColor"
          d="M20.774 15.028l-4.429-1.985a1.312 1.312 0 00-1.297.154l-2.315 1.969a.176.176 0 01-.157.006c-1.488-.719-3.03-2.25-3.75-3.718a.179.179 0 010-.157L10.8 8.953a1.312 1.312 0 00.144-1.298l-1.97-4.422a1.312 1.312 0 00-1.365-.785A5.085 5.085 0 003.188 7.5c0 7.34 5.971 13.313 13.312 13.313a5.086 5.086 0 005.052-4.423 1.313 1.313 0 00-.778-1.362zm-4.274 4.66C9.78 19.688 4.313 14.22 4.313 7.5A3.96 3.96 0 017.75 3.563h.022a.187.187 0 01.172.122l1.979 4.417a.188.188 0 010 .156l-1.98 2.35a.437.437 0 00-.04.053 1.313 1.313 0 00-.085 1.287c.831 1.703 2.547 3.405 4.268 4.237a1.313 1.313 0 001.344-.133l2.313-1.969a.18.18 0 01.15-.01l4.43 1.985a.188.188 0 01.114.188 3.96 3.96 0 01-3.937 3.442z"
        />
      </g>
      <defs>
        <clipPath id="Phone_svg__Phone_svg__clip0_2279_53384">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPhone);
export default ForwardRef;
