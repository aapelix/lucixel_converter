import * as React from "react";

interface SvgContactRoundProps extends React.SVGAttributes<SVGElement> {}

const SvgContactRound = React.forwardRef<SVGSVGElement, SvgContactRoundProps>(
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
      <path d="M3 1h1v1H3zM7 1h1v1H7zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM9 3h1v1H9zM1 4h1v1H1zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM7 5h1v1H7zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM7 6h1v1H7zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM3 8h1v1H3zM7 8h1v1H7zM9 8h1v1H9zM1 9h1v1H1zM3 9h1v1H3zM7 9h1v1H7zM9 9h1v1H9zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgContactRound.displayName = "SvgContactRound";

export default SvgContactRound;
