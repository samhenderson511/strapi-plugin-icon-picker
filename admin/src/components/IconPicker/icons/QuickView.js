import * as React from 'react';
function SvgQuickview(props, svgRef) {
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
        clipPath="url(#Quick_view_svg__Quick_view_svg__clip0_5231_124096)"
        clipRule="evenodd"
      >
        <path d="M3.584 8.271C5.338 6.517 8.084 4.75 12 4.75c3.916 0 6.662 1.767 8.416 3.521a13.902 13.902 0 011.921 2.408 11.753 11.753 0 01.578 1.028l.03.064.008.018.003.005v.002L22.5 12l.457.204-.002.002-.002.005-.008.018a5.386 5.386 0 01-.146.293c-.102.195-.255.47-.462.8a13.943 13.943 0 01-1.921 2.407c-1.755 1.754-4.5 3.521-8.416 3.521-3.916 0-6.662-1.767-8.416-3.521a13.94 13.94 0 01-1.921-2.408 11.721 11.721 0 01-.578-1.028 4.273 4.273 0 01-.03-.064l-.008-.018-.003-.005v-.002L1.5 12l-.457-.204.001-.002.003-.005.008-.018.03-.064a11.721 11.721 0 01.578-1.028 13.939 13.939 0 011.92-2.408zM1.5 12l-.457-.204a.501.501 0 000 .407L1.5 12zm.556 0l.03.058c.092.174.232.426.423.73.383.61.97 1.422 1.782 2.233C5.91 16.642 8.416 18.25 12 18.25c3.584 0 6.088-1.608 7.709-3.229a12.934 12.934 0 001.782-2.233 10.662 10.662 0 00.453-.788 10.662 10.662 0 00-.453-.788 12.936 12.936 0 00-1.782-2.233c-1.62-1.621-4.125-3.229-7.71-3.229-3.583 0-6.087 1.608-7.708 3.229a12.94 12.94 0 00-1.782 2.233 10.702 10.702 0 00-.453.788zM22.5 12l.457.204a.501.501 0 000-.407L22.5 12z" />
        <path d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM7.75 12a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z" />
      </g>
      <defs>
        <clipPath id="Quick_view_svg__Quick_view_svg__clip0_5231_124096">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgQuickview);
export default ForwardRef;
