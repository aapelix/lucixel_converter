import * as React from "react";

interface SvgAlbumProps extends React.SVGAttributes<SVGElement> {}

const SvgAlbum = React.forwardRef<SVGSVGElement, SvgAlbumProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM4 2h1v1H4zM8 2h1v1H8zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM1 9h1v1H1zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAlbum.displayName = "SvgAlbum";

export default SvgAlbum;
