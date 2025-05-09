import * as React from "react";

interface SvgTwitterProps extends React.SVGAttributes<SVGElement> {}

const SvgTwitter = React.forwardRef<SVGSVGElement, SvgTwitterProps>(
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
      <path d="M6 2h1v1H6zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM9 5h1v1H9zM1 6h1v1H1zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM9 7h1v1H9zM2 8h1v1H2zM8 8h1v1H8zM1 9h1v1H1zM7 9h1v1H7zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgTwitter.displayName = "SvgTwitter";

export default SvgTwitter;
