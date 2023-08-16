import * as React from 'react';
function SvgQuestion(props, svgRef) {
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
      <g fill="currentColor" clipPath="url(#Question_svg__Question_svg__clip0_3308_94950)">
        <path d="M12 18a1.125 1.125 0 100-2.25A1.125 1.125 0 0012 18z" />
        <path
          fillRule="evenodd"
          d="M8.5 10.125C8.5 8.339 10.132 7 12 7s3.5 1.339 3.5 3.125c0 1.625-1.35 2.88-3 3.093v.282a.5.5 0 01-1 0v-.75a.5.5 0 01.5-.5c1.445 0 2.5-1.012 2.5-2.125S13.445 8 12 8s-2.5 1.012-2.5 2.125v.375a.5.5 0 01-1 0v-.375z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Question_svg__Question_svg__clip0_3308_94950">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgQuestion);
export default ForwardRef;
