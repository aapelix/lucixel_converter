import * as React from "react";

interface SvgAlarmSmokeProps extends React.SVGAttributes<SVGElement> {}

const SvgAlarmSmoke = React.forwardRef<SVGSVGElement, SvgAlarmSmokeProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM10 2h1v1h-1zM1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM3 5h1v1H3zM8 5h1v1H8zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM3 8h1v1H3zM6 8h1v1H6zM9 8h1v1H9zM3 9h1v1H3zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM5 10h1v1H5zM8 10h1v1H8z" />
    </svg>
  )
);

SvgAlarmSmoke.displayName = "SvgAlarmSmoke";

export default SvgAlarmSmoke;
