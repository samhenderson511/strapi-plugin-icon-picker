import * as React from 'react';
function SvgPunctureresistance1(props, svgRef) {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.9 20.574a.5.5 0 01.5-.5h19.2a.5.5 0 010 1H2.4a.5.5 0 01-.5-.5zM16.937 3.17a.5.5 0 01.683-.183l2.112 1.218a.5.5 0 01.183.683l-1.7 2.94 1.673.967a.5.5 0 01.183.683l-4.134 7.164a.5.5 0 01-.304.233l-6.648 1.782a.5.5 0 01-.562-.733L16.937 3.17zm.616.933l-7.66 13.276 5.281-1.416 3.781-6.552-1.673-.968a.5.5 0 01-.183-.683l1.7-2.939-1.246-.718zM6.532 14.127a.5.5 0 01.671.223l.9 1.8a.5.5 0 11-.894.448l-.9-1.8a.5.5 0 01.223-.671zM3.909 16.15a.5.5 0 00.223.671l2.4 1.2a.5.5 0 10.448-.894l-2.4-1.2a.5.5 0 00-.671.223z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPunctureresistance1);
export default ForwardRef;
