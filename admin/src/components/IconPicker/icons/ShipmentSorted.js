import * as React from 'react';
function SvgShipmentsorted(props, svgRef) {
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
        clipPath="url(#Shipment_sorted_svg__Shipment_sorted_svg__clip0_5084_123707)"
        clipRule="evenodd"
      >
        <path d="M6.115 11.002a.5.5 0 01.5-.5h10.771a.5.5 0 01.5.5v8.242a.5.5 0 01-1 0v-7.742H7.115v7.742a.5.5 0 01-1 0v-8.242zm13.161-2.234a.5.5 0 01.5.5v9.976a.5.5 0 01-1 0V9.268a.5.5 0 01.5-.5zm-14.551 0a.5.5 0 01.5.5v9.976a.5.5 0 01-1 0V9.268a.5.5 0 01.5-.5z" />
        <path d="M11.714 3.643a.5.5 0 01.572 0l8.696 6.055a.5.5 0 11-.571.821L12 4.663l-8.412 5.856a.5.5 0 11-.57-.82l8.695-6.056zM8.072 16.141a.5.5 0 01.5-.5h3.464a.5.5 0 01.5.5v3.103a.5.5 0 01-.5.5H8.572a.5.5 0 01-.5-.5V16.14zm1 .5v2.103h2.464V16.64H9.072z" />
        <path d="M11.536 16.141a.5.5 0 01.5-.5H15.5a.5.5 0 01.5.5v3.103a.5.5 0 01-.5.5h-3.464a.5.5 0 01-.5-.5V16.14zm1 .5v2.103H15V16.64h-2.464z" />
        <path d="M9.804 13.014a.5.5 0 01.5-.5h3.464a.5.5 0 01.5.5v3.102a.5.5 0 01-.5.5h-3.464a.5.5 0 01-.5-.5v-3.102zm1 .5v2.102h2.464v-2.102h-2.464z" />
      </g>
      <defs>
        <clipPath id="Shipment_sorted_svg__Shipment_sorted_svg__clip0_5084_123707">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShipmentsorted);
export default ForwardRef;
