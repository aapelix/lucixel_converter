import * as React from "react";

interface SvgArrowDown10Props extends React.SVGAttributes<SVGElement> {}

const SvgArrowDown10 = React.forwardRef<SVGSVGElement, SvgArrowDown10Props>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M8 1h1v1H8zM9 1h1v1H9zM3 2h1v1H3zM9 2h1v1H9zM3 3h1v1H3zM9 3h1v1H9zM3 4h1v1H3zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM3 5h1v1H3zM3 6h1v1H3zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM7 8h1v1H7zM10 8h1v1h-1zM3 9h1v1H3zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgArrowDown10.displayName = "SvgArrowDown10";

export default SvgArrowDown10;
