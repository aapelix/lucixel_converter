import * as React from "react";

interface SvgBeerOffProps extends React.SVGAttributes<SVGElement> {}

const SvgBeerOff = React.forwardRef<SVGSVGElement, SvgBeerOffProps>(
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
      <path d="M1 1h1v1H1zM5 1h1v1H5zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM2 2h1v1H2zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM3 3h1v1H3zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgBeerOff.displayName = "SvgBeerOff";

export default SvgBeerOff;
