import * as React from 'react';
function SvgPencil(props, svgRef) {
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
        clipPath="url(#Pencil_svg__Pencil_svg__clip0_5184_124124)"
        clipRule="evenodd"
      >
        <path d="M15.884 3.573a.25.25 0 01.177-.073l-.177.073zm0 0L4.324 15.134a.25.25 0 00-.074.177v4.19a.25.25 0 00.25.25h4.19a.25.25 0 00.176-.074L20.427 8.113a.25.25 0 000-.353l-4.19-4.187a.25.25 0 00-.176-.073m-.884-.634a1.25 1.25 0 011.767 0l4.19 4.187a1.25 1.25 0 010 1.767L9.573 20.384a1.25 1.25 0 01-.883.366H4.5a1.25 1.25 0 01-1.25-1.25v-4.19c0-.33.132-.648.366-.883L15.177 2.866z" />
        <path d="M12.396 5.647a.5.5 0 01.708 0l5.25 5.25a.5.5 0 01-.708.707l-5.25-5.25a.5.5 0 010-.707z" />
        <path d="M15.729 8.272a.5.5 0 010 .707l-9 9a.5.5 0 01-.708-.707l9-9a.5.5 0 01.708 0z" />
        <path d="M3.444 14.694a.5.5 0 01.707 0l5.155 5.155a.5.5 0 11-.707.707L3.444 15.4a.5.5 0 010-.707z" />
      </g>
      <defs>
        <clipPath id="Pencil_svg__Pencil_svg__clip0_5184_124124">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPencil);
export default ForwardRef;
