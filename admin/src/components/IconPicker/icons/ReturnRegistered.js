import * as React from 'react';
function SvgReturnregistered(props, svgRef) {
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
        clipPath="url(#Return_registered_svg__Return_registered_svg__clip0_5182_124115)"
        clipRule="evenodd"
      >
        <path d="M11.192 3.56a.5.5 0 01.224.672L10.18 6.704v1.651l.307-.154a.5.5 0 01.41-.017L12 8.626l1.103-.442a.5.5 0 01.41.017l.307.154v-1.65l-1.236-2.473a.5.5 0 01.895-.448l1.289 2.578a.5.5 0 01.052.224v2.578a.5.5 0 01-.723.447l-.83-.415-1.081.432a.5.5 0 01-.372 0l-1.08-.432-.83.415a.5.5 0 01-.724-.447V6.586a.5.5 0 01.052-.224l1.29-2.578a.5.5 0 01.67-.223z" />
        <path d="M6.507 3.638a.5.5 0 01.337-.13h10.312a.5.5 0 01.337.13l2.835 2.578a.5.5 0 11-.672.74l-2.693-2.448H7.037L4.344 6.956a.5.5 0 01-.673-.74l2.836-2.578z" />
        <path d="M4.508 7.086v12.406h9.297a.5.5 0 010 1h-9.54a.759.759 0 01-.757-.758V6.845c0-.418.34-.758.758-.758h15.468c.418 0 .758.34.758.758V12a.5.5 0 11-1 0V7.086H4.508z" />
        <path d="M14.56 11.045a.5.5 0 01.26.44v1.046h1.692a3.99 3.99 0 013.98 3.98 3.99 3.99 0 01-3.98 3.981h-2.707a.5.5 0 110-1h2.707a2.99 2.99 0 002.98-2.98 2.99 2.99 0 00-2.98-2.98H14.32a.5.5 0 01-.5-.5v-.628l-2.962 1.916 2.962 1.917v-.37a.5.5 0 01.5-.5h1.547a2.827 2.827 0 012.82 2.82.5.5 0 11-1 0c0-1-.82-1.82-1.82-1.82H14.82v.79a.5.5 0 01-.771.42L9.666 14.74a.5.5 0 010-.84l4.383-2.835a.5.5 0 01.51-.02z" />
      </g>
      <defs>
        <clipPath id="Return_registered_svg__Return_registered_svg__clip0_5182_124115">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReturnregistered);
export default ForwardRef;
