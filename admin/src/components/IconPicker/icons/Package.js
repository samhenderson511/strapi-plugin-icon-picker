import * as React from 'react';
function SvgPackage(props, svgRef) {
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
        clipPath="url(#Package_svg__Package_svg__clip0_2433_72886)"
        clipRule="evenodd"
      >
        <path d="M12 11.602a.5.5 0 01.5.5v9.645a.5.5 0 01-1 0v-9.645a.5.5 0 01.5-.5z" />
        <path d="M2.627 6.971a.5.5 0 01.679-.198L12 11.53l8.694-4.758a.5.5 0 01.48.877l-8.934 4.89a.5.5 0 01-.48 0L2.826 7.65a.5.5 0 01-.199-.679z" />
        <path d="M11.88 2.782L3.63 7.3a.25.25 0 00-.13.219v8.966a.25.25 0 00.13.219l8.25 4.517a.25.25 0 00.24 0l8.25-4.517a.25.25 0 00.13-.22V7.518a.252.252 0 00-.13-.219l-8.25-4.517a.25.25 0 00-.24 0zm-.48-.877a1.25 1.25 0 011.2 0l8.25 4.517a1.25 1.25 0 01.65 1.094v8.967a1.251 1.251 0 01-.65 1.097l-8.25 4.517a1.25 1.25 0 01-1.2 0L3.15 17.58a1.25 1.25 0 01-.65-1.094v-8.97a1.25 1.25 0 01.65-1.094l8.25-4.517z" />
        <path d="M7.208 4.289a.5.5 0 01.679-.199l8.853 4.846a.5.5 0 01.26.439v4.875a.5.5 0 11-1 0V9.671L7.406 4.968a.5.5 0 01-.198-.679z" />
      </g>
      <defs>
        <clipPath id="Package_svg__Package_svg__clip0_2433_72886">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPackage);
export default ForwardRef;
