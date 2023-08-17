import * as React from 'react';
function SvgTruck(props, svgRef) {
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
        clipPath="url(#Truck_svg__Truck_svg__clip0_5001_132104)"
        clipRule="evenodd"
      >
        <path d="M20.632 8.043a.25.25 0 00-.14-.043H16.5a.5.5 0 010-1h3.992a1.25 1.25 0 011.159.781v.002l1.313 3.281a.5.5 0 11-.928.372l-1.312-3.28a.252.252 0 00-.092-.113zM1 13.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm16.25 2.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM14.5 18a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-7.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM4 18a2.75 2.75 0 115.5 0A2.75 2.75 0 014 18z" />
        <path d="M8.5 18a.5.5 0 01.5-.5h6a.5.5 0 010 1H9a.5.5 0 01-.5-.5zm7.5-6.75a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6a1.25 1.25 0 01-1.25 1.25H19.5a.5.5 0 010-1h2.25a.25.25 0 00.25-.25v-5.5h-5.5a.5.5 0 01-.5-.5z" />
        <path d="M2.25 6.5a.25.25 0 00-.25.25v10.5a.25.25 0 00.25.25H4.5a.5.5 0 010 1H2.25A1.25 1.25 0 011 17.25V6.75A1.25 1.25 0 012.25 5.5H16.5a.5.5 0 01.5.5v9.878a.5.5 0 11-1 0V6.5H2.25z" />
      </g>
      <defs>
        <clipPath id="Truck_svg__Truck_svg__clip0_5001_132104">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTruck);
export default ForwardRef;
