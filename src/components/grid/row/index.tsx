import { CSSProperties } from "react";
import styled from "styled-components";

export const Row = styled("div")`
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
