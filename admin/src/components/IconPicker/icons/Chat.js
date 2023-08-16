import * as React from 'react';
function SvgChat(props, svgRef) {
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
        clipPath="url(#Chat_svg__Chat_svg__clip0_2279_53366)"
        clipRule="evenodd"
      >
        <path d="M3.75 5.75A.25.25 0 003.5 6v15a.25.25 0 00.408.193l3.021-2.65c.226-.189.51-.293.805-.293H20.25a.25.25 0 00.25-.25V6a.25.25 0 00-.25-.25H3.75zm-.884-.634a1.25 1.25 0 01.884-.366h16.5A1.25 1.25 0 0121.5 6v12a1.25 1.25 0 01-1.25 1.25H7.735a.25.25 0 00-.159.056l-3.021 2.65A1.25 1.25 0 012.5 21V6c0-.332.132-.65.366-.884z" />
        <path d="M8.5 10.5A.5.5 0 019 10h6a.5.5 0 010 1H9a.5.5 0 01-.5-.5zm0 3A.5.5 0 019 13h6a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="Chat_svg__Chat_svg__clip0_2279_53366">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChat);
export default ForwardRef;
