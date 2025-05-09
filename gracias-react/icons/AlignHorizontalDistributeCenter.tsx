import * as React from "react";

interface SvgAlignHorizontalDistributeCenterProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalDistributeCenter = React.forwardRef<SVGSVGElement, SvgAlignHorizontalDistributeCenterProps>(
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
      <path d="M2 1h1v1H2zM7 1h1v1H7zM2 2h1v1H2zM3 2h1v1H3zM7 2h1v1H7zM1 3h1v1H1zM4 3h1v1H4zM7 3h1v1H7zM1 4h1v1H1zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM7 9h1v1H7zM2 10h1v1H2zM7 10h1v1H7z" />
    </svg>
  )
);

SvgAlignHorizontalDistributeCenter.displayName = "SvgAlignHorizontalDistributeCenter";

export default SvgAlignHorizontalDistributeCenter;
