import * as React from 'react';
function SvgAcidresistant(props, svgRef) {
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
        d="M11.868 4.467a.5.5 0 01.707 0l4.5 4.5a.5.5 0 01-.707.707l-.397-.397-8.146 8.147a2.621 2.621 0 11-3.707-3.707l8.146-8.147-.396-.396a.5.5 0 010-.707zm1.103 1.81l-8.146 8.147a1.621 1.621 0 002.293 2.293l8.146-8.147-2.293-2.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.118 11.717a.5.5 0 01.353-.147h6a.5.5 0 01.354.854l-5 5a2.621 2.621 0 11-3.707-3.707l2-2zm.56.853l-1.853 1.854a1.621 1.621 0 002.293 2.293l4.146-4.147H6.68zm11.644.92l-.25.432-.251-.433a.5.5 0 01.501 0zm-.25 1.032l.032.024c.18.132.42.326.657.573.485.504.91 1.173.91 1.953a1.6 1.6 0 01-3.2 0c0-.78.426-1.45.91-1.953a5.147 5.147 0 01.69-.597zm-.251-1.033l.25.433.251-.433.002.001.002.002.007.004.023.013.077.049a6.131 6.131 0 011.049.868c.565.588 1.19 1.494 1.19 2.646a2.6 2.6 0 11-5.2 0c0-1.152.624-2.058 1.189-2.646a6.138 6.138 0 011.126-.917l.023-.013.007-.004.002-.002h.002z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAcidresistant);
export default ForwardRef;
