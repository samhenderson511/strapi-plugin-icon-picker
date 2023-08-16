import * as React from 'react';
function SvgSearchMenu(props, svgRef) {
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
        clipPath="url(#SearchMenu_svg__SearchMenu_svg__clip0_1300_17866)"
        clipRule="evenodd"
      >
        <path d="M16.5 11.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.25-5a.5.5 0 01.5-.5H22a.5.5 0 010 1h-6.25a.5.5 0 01-.5-.5zm3.75 10a.5.5 0 01.5-.5H22a.5.5 0 010 1h-2.5a.5.5 0 01-.5-.5zM8.25 4.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5zM1.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z" />
        <path d="M12.316 14.316a.5.5 0 01.707 0l4.33 4.33a.5.5 0 01-.707.708l-4.33-4.33a.5.5 0 010-.708z" />
      </g>
      <defs>
        <clipPath id="SearchMenu_svg__SearchMenu_svg__clip0_1300_17866">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSearchMenu);
export default ForwardRef;
