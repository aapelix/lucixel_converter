import * as React from "react";

interface SvgExpandProps extends React.SVGAttributes<SVGElement> {}

const SvgExpand = React.forwardRef<SVGSVGElement, SvgExpandProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM1 2h1v1H1zM2 2h1v1H2zM9 2h1v1H9zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM8 3h1v1H8zM10 3h1v1h-1zM4 4h1v1H4zM7 4h1v1H7zM4 7h1v1H4zM7 7h1v1H7zM1 8h1v1H1zM3 8h1v1H3zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM2 9h1v1H2zM9 9h1v1H9zM10 9h1v1h-1zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgExpand.displayName = "SvgExpand";

export default SvgExpand;
