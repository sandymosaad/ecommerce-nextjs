"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef, ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  style?: React.CSSProperties;
};

const LinkComponent = forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <Link ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
);

export default LinkComponent;