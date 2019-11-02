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
  children: ReactNode;
};

export const Row = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => (
  <StyledRow ref={ref} style={rest}>
    {children}
  </StyledRow>
));
