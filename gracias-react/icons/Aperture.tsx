import * as React from "react";

interface SvgApertureProps extends React.SVGAttributes<SVGElement> {}

const SvgAperture = React.forwardRef<SVGSVGElement, SvgApertureProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM6 2h1v1H6zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM6 3h1v1H6zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM9 8h1v1H9zM3 9h1v1H3zM5 9h1v1H5zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgAperture.displayName = "SvgAperture";

export default SvgAperture;
