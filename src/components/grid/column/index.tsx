import React, { CSSProperties, forwardRef, ReactNode } from "react";
import styled from "styled-components";

const StyledColumn = styled("div")`
  display: flex;

  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
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

export const Column = forwardRef<HTMLDivElement, Props>(({ children = null, className, style, ...rest }, ref) => (
  <StyledColumn className={className} ref={ref} style={{ ...style, ...rest }}>
    {children}
  </StyledColumn>
));
