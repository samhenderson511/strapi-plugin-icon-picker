import * as React from 'react';
function SvgRadiobutton(props, svgRef) {
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
      <g clipPath="url(#Radio_button_svg__Radio_button_svg__clip0_2057_37343)">
        <g
          fill="currentColor"
          clipPath="url(#Radio_button_svg__Radio_button_svg__clip1_2057_37343)"
        >
          <path
            fillRule="evenodd"
            d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            clipRule="evenodd"
          />
          <path d="M12 17.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
        </g>
      </g>
      <defs>
        <clipPath id="Radio_button_svg__Radio_button_svg__clip0_2057_37343">
          <rect width={24} height={24} fill="currentColor" rx={5} />
        </clipPath>
        <clipPath id="Radio_button_svg__Radio_button_svg__clip1_2057_37343">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRadiobutton);
export default ForwardRef;
