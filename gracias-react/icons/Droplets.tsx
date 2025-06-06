import * as React from "react";

interface SvgDropletsProps extends React.SVGAttributes<SVGElement> {}

const SvgDroplets = React.forwardRef<SVGSVGElement, SvgDropletsProps>(
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
      <path d="M6 1h1v1H6zM3 2h1v1H3zM6 2h1v1H6zM3 3h1v1H3zM7 3h1v1H7zM2 4h1v1H2zM4 4h1v1H4zM8 4h1v1H8zM1 5h1v1H1zM5 5h1v1H5zM8 5h1v1H8zM1 6h1v1H1zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM10 7h1v1h-1zM10 8h1v1h-1zM2 9h1v1H2zM10 9h1v1h-1zM3 10h1v1H3zM9 10h1v1H9zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8z" />
    </svg>
  )
);

SvgDroplets.displayName = "SvgDroplets";

export default SvgDroplets;
