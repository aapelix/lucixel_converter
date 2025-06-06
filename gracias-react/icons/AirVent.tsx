import * as React from "react";

interface SvgAirVentProps extends React.SVGAttributes<SVGElement> {}

const SvgAirVent = React.forwardRef<SVGSVGElement, SvgAirVentProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM2 6h1v1H2zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM9 6h1v1H9zM5 7h1v1H5zM7 7h1v1H7zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM4 9h1v1H4zM7 9h1v1H7zM9 9h1v1H9zM8 10h1v1H8z" />
    </svg>
  )
);

SvgAirVent.displayName = "SvgAirVent";

export default SvgAirVent;
