import * as React from "react";

interface SvgBusProps extends React.SVGAttributes<SVGElement> {}

const SvgBus = React.forwardRef<SVGSVGElement, SvgBusProps>(
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
      <path d="M2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM1 4h1v1H1zM3 4h1v1H3zM6 4h1v1H6zM8 4h1v1H8zM1 5h1v1H1zM3 5h1v1H3zM6 5h1v1H6zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBus.displayName = "SvgBus";

export default SvgBus;
