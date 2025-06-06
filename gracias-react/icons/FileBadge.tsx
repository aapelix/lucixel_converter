import * as React from "react";

interface SvgFileBadgeProps extends React.SVGAttributes<SVGElement> {}

const SvgFileBadge = React.forwardRef<SVGSVGElement, SvgFileBadgeProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM3 4h1v1H3zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM9 8h1v1H9zM1 9h1v1H1zM2 9h1v1H2zM4 9h1v1H4zM9 9h1v1H9zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFileBadge.displayName = "SvgFileBadge";

export default SvgFileBadge;
