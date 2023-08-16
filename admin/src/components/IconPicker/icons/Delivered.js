import * as React from 'react';
function SvgDelivered(props, svgRef) {
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
        clipPath="url(#Delivered_svg__Delivered_svg__clip0_5088_123746)"
        clipRule="evenodd"
      >
        <path d="M12.83 4.05a.5.5 0 01.65.278l1.065 2.66a.5.5 0 01.036.187V9.57a.5.5 0 01-.622.485l-.943-.236-.943.236a.5.5 0 01-.243 0l-.943-.236-.943.236a.5.5 0 01-.621-.485V7.175a.5.5 0 01.052-.224l1.331-2.661a.5.5 0 01.894.447l-1.277 2.556v1.636l.443-.11a.5.5 0 01.242 0l.944.235.943-.235a.5.5 0 01.242 0l.444.11V7.271l-1.03-2.572a.5.5 0 01.28-.65z" />
        <path d="M7.104 4.13A.5.5 0 017.441 4h9.048a.5.5 0 01.337.13l2.927 2.661a.5.5 0 11-.673.74L16.296 5H7.634L4.85 7.531a.5.5 0 11-.673-.74L7.104 4.13z" />
        <path d="M5 7.661v11.242h7.218a.5.5 0 110 1H4.766A.767.767 0 014 19.137V7.427c0-.422.344-.766.766-.766h14.371c.423 0 .766.344.766.766v4.79a.5.5 0 11-1 0V7.662H5z" />
        <path d="M17.274 14.048a3.226 3.226 0 100 6.452 3.226 3.226 0 000-6.452zm-4.226 3.226a4.226 4.226 0 118.452 0 4.226 4.226 0 01-8.452 0z" />
        <path d="M19.158 15.534a.5.5 0 01.123.696l-1.863 2.662a.5.5 0 01-.764.066l-1.33-1.33a.5.5 0 01.707-.707l.91.909 1.52-2.173a.5.5 0 01.697-.123z" />
      </g>
      <defs>
        <clipPath id="Delivered_svg__Delivered_svg__clip0_5088_123746">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDelivered);
export default ForwardRef;
