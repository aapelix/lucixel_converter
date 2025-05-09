import * as React from "react";

interface SvgDiamondPercentProps extends React.SVGAttributes<SVGElement> {}

const SvgDiamondPercent = React.forwardRef<SVGSVGElement, SvgDiamondPercentProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM6 2h1v1H6zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM7 3h1v1H7zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM1 5h1v1H1zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM8 6h1v1H8zM3 7h1v1H3zM4 7h1v1H4zM6 7h1v1H6zM7 7h1v1H7zM4 8h1v1H4zM6 8h1v1H6zM5 9h1v1H5z" />
    </svg>
  )
);

SvgDiamondPercent.displayName = "SvgDiamondPercent";

export default SvgDiamondPercent;
