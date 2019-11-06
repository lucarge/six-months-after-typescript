import React, { CSSProperties, forwardRef, ReactNode } from "react";
import styled from "styled-components";

const StyledRow = styled("div")`
  display: flex;

  align-items: stretch;
  flex-basis: auto;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: nowrap;
  justify-content: flex-start;

  min-height: 0;
  min-width: 0;
`;

type Props = CSSProperties & {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Row = forwardRef<HTMLDivElement, Props>(({ children = null, className, style, ...rest }, ref) => (
  <StyledRow className={className} ref={ref} style={{ ...style, ...rest }}>
    {children}
  </StyledRow>
));
