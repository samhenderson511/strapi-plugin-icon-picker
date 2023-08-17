import * as React from 'react';
function SvgMail(props, svgRef) {
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
        clipPath="url(#Mail_svg__Mail_svg__clip0_6109_46368)"
        clipRule="evenodd"
      >
        <path d="M2.5 5.25a.5.5 0 01.5-.5h18a.5.5 0 01.5.5V18a1.25 1.25 0 01-1.25 1.25H3.75A1.25 1.25 0 012.5 18V5.25zm1 .5V18a.25.25 0 00.25.25h16.5a.25.25 0 00.25-.25V5.75h-17z" />
        <path d="M2.631 4.912a.5.5 0 01.707-.03L12 12.821l8.662-7.94a.5.5 0 01.676.737l-9 8.25a.5.5 0 01-.676 0l-9-8.25a.5.5 0 01-.03-.707z" />
      </g>
      <defs>
        <clipPath id="Mail_svg__Mail_svg__clip0_6109_46368">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMail);
export default ForwardRef;
