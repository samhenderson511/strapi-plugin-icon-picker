import * as React from 'react';
function SvgProduct(props, svgRef) {
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
      <g clipPath="url(#Product_svg__Product_svg__clip0_4790_120693)">
        <path
          fill="currentColor"
          d="M23.122 5.906l-4.853-2.65a.556.556 0 00-.27-.068h-3a.563.563 0 00-.562.562 2.437 2.437 0 11-4.875 0A.563.563 0 009 3.187H6a.556.556 0 00-.27.07L.877 5.907a1.29 1.29 0 00-.542 1.738l1.808 3.451a1.349 1.349 0 001.2.716h2.094V19.5a1.313 1.313 0 001.313 1.313h10.5a1.312 1.312 0 001.312-1.313v-7.688h2.095a1.349 1.349 0 001.2-.716l1.808-3.45a1.291 1.291 0 00-.543-1.74zm-19.78 4.782a.227.227 0 01-.205-.114L1.332 7.125a.17.17 0 01.084-.232l4.021-2.195v5.99H3.341zM17.436 19.5a.188.188 0 01-.187.188H6.75a.188.188 0 01-.188-.188V4.312h1.92a3.562 3.562 0 007.032 0h1.923V19.5zM22.67 7.125l-1.808 3.45a.226.226 0 01-.204.113h-2.095v-5.99l4.022 2.194a.172.172 0 01.084.233z"
        />
      </g>
      <defs>
        <clipPath id="Product_svg__Product_svg__clip0_4790_120693">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgProduct);
export default ForwardRef;
