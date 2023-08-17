import * as React from 'react';
function SvgOnitsway(props, svgRef) {
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
        clipPath="url(#On_its_way_svg__On_its_way_svg__clip0_5118_123761)"
        clipRule="evenodd"
      >
        <path d="M.25 8.43a.5.5 0 01.5-.5h8.823a.5.5 0 110 1H.75a.5.5 0 01-.5-.5zm2.67 1.945a.5.5 0 01.5-.5h8.824a.5.5 0 010 1H3.42a.5.5 0 01-.5-.5zM.25 12.32a.5.5 0 01.5-.5h8.823a.5.5 0 110 1H.75a.5.5 0 01-.5-.5z" />
        <path d="M3.775 11.944a.5.5 0 01.5.5v3.144c0 .221.18.4.4.4h2.371a.5.5 0 010 1h-2.37a1.4 1.4 0 01-1.4-1.4v-3.144a.5.5 0 01.5-.5zM4.986 5.25a.5.5 0 01.5-.5h10.072a1.4 1.4 0 011.4 1.4v9.438a1.4 1.4 0 01-1.4 1.4h-4.586a.5.5 0 110-1h4.587a.4.4 0 00.4-.4V6.15a.4.4 0 00-.4-.4H5.486a.5.5 0 01-.5-.5z" />
        <path d="M3.275 6.15a1.4 1.4 0 011.4-1.4h1.17a.5.5 0 010 1h-1.17a.4.4 0 00-.4.4v2.107a.5.5 0 11-1 0V6.15zm5.745 9.148a1.19 1.19 0 100 2.381 1.19 1.19 0 000-2.381zm-2.191 1.19a2.19 2.19 0 114.382 0 2.19 2.19 0 01-4.382 0zM19.708 15.3a1.19 1.19 0 10.131 2.378 1.19 1.19 0 00-.131-2.378zm-2.122 1.31a2.19 2.19 0 114.375-.242 2.19 2.19 0 01-4.375.241z" />
        <path d="M13.798 16.488a.5.5 0 01.5-.5h3.667a.5.5 0 010 1h-3.667a.5.5 0 01-.5-.5zm2.161-8.195a.5.5 0 01.5-.5h2.887c.433 0 .838.214 1.082.571l2.118 3.108a1.309 1.309 0 011.204 1.305v2.902a1.31 1.31 0 01-1.31 1.309h-.843a.5.5 0 010-1h.844a.31.31 0 00.309-.31v-2.901a.309.309 0 00-.308-.31h-.163a.5.5 0 01-.413-.218l-2.264-3.32a.311.311 0 00-.256-.136h-2.887a.5.5 0 01-.5-.5z" />
        <path d="M18.17 9.382a.5.5 0 01.5.5v1.277c0 .17.14.309.31.309h3.298a.5.5 0 010 1H18.98a1.31 1.31 0 01-1.31-1.31V9.883a.5.5 0 01.5-.5z" />
      </g>
      <defs>
        <clipPath id="On_its_way_svg__On_its_way_svg__clip0_5118_123761">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgOnitsway);
export default ForwardRef;