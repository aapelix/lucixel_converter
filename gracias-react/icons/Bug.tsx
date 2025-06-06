import * as React from "react";

interface SvgBugProps extends React.SVGAttributes<SVGElement> {}

const SvgBug = React.forwardRef<SVGSVGElement, SvgBugProps>(
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
      <path d="M3 0h1v1H3zM7 0h1v1H7zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM3 2h1v1H3zM7 2h1v1H7zM1 3h1v1H1zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM9 3h1v1H9zM1 4h1v1H1zM2 4h1v1H2zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM1 6h1v1H1zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM9 6h1v1H9zM2 7h1v1H2zM5 7h1v1H5zM8 7h1v1H8zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM1 9h1v1H1zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM9 9h1v1H9zM1 10h1v1H1zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBug.displayName = "SvgBug";

export default SvgBug;
