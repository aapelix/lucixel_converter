import * as React from "react";

interface SvgSearchProps extends React.SVGAttributes<SVGElement> {}

const SvgSearch = React.forwardRef<SVGSVGElement, SvgSearchProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM7 2h1v1H7zM1 3h1v1H1zM8 3h1v1H8zM1 4h1v1H1zM8 4h1v1H8zM1 5h1v1H1zM8 5h1v1H8zM1 6h1v1H1zM8 6h1v1H8zM2 7h1v1H2zM7 7h1v1H7zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM9 9h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgSearch.displayName = "SvgSearch";

export default SvgSearch;
