import * as React from "react";

interface SvgBeanProps extends React.SVGAttributes<SVGElement> {}

const SvgBean = React.forwardRef<SVGSVGElement, SvgBeanProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM5 2h1v1H5zM8 2h1v1H8zM4 3h1v1H4zM9 3h1v1H9zM4 4h1v1H4zM9 4h1v1H9zM3 5h1v1H3zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM8 7h1v1H8zM1 8h1v1H1zM7 8h1v1H7zM1 9h1v1H1zM6 9h1v1H6zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgBean.displayName = "SvgBean";

export default SvgBean;
