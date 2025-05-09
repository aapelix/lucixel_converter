import * as React from "react";

interface SvgPickaxeProps extends React.SVGAttributes<SVGElement> {}

const SvgPickaxe = React.forwardRef<SVGSVGElement, SvgPickaxeProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM4 4h1v1H4zM5 4h1v1H5zM9 4h1v1H9zM4 5h1v1H4zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM4 9h1v1H4zM8 9h1v1H8zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgPickaxe.displayName = "SvgPickaxe";

export default SvgPickaxe;
