import * as React from "react";

interface SvgBoldProps extends React.SVGAttributes<SVGElement> {}

const SvgBold = React.forwardRef<SVGSVGElement, SvgBoldProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM1 2h1v1H1zM8 2h1v1H8zM1 3h1v1H1zM9 3h1v1H9zM1 4h1v1H1zM9 4h1v1H9zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM1 6h1v1H1zM8 6h1v1H8zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM1 9h1v1H1zM8 9h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgBold.displayName = "SvgBold";

export default SvgBold;
