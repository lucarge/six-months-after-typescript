import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import React, { Fragment, ReactNode } from "react";
import { Appear, Text } from "spectacle";

type Props = {
  autoAppear?: boolean;
  children: ReactNode;
};

const HelperType = ({ autoAppear = false, children }: Props) => {
  const Container = autoAppear ? Fragment : Appear;

  return (
    <Container>
      <Column
        backgroundColor="#fff"
        borderRadius={4}
        boxShadow="0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)"
        marginRight="2.66rem"
        marginTop="1.33rem"
      >
        <Column padding="4px 8px">
          <Text textColor="primary" textFont="tertiary">
            {children}
          </Text>
        </Column>
      </Column>
    </Container>
  );
};

export const S57 = () => (
  <Column justifyContent="space-around">
    <Row flexWrap="wrap">
      <HelperType autoAppear>NonNullable</HelperType>
      <HelperType>ReturnType</HelperType>
      <HelperType>Arguments</HelperType>
      <HelperType>Partial</HelperType>
      <HelperType>Readonly</HelperType>
      <HelperType>keyof</HelperType>
    </Row>

    <Row flexWrap="wrap" paddingTop="2.66rem">
      <HelperType>MapExtractor</HelperType>
      <HelperType>MapKeys</HelperType>
      <HelperType>MapPick</HelperType>
      <HelperType>MapOmit</HelperType>
      <HelperType>ListExtractor</HelperType>
    </Row>
  </Column>
);
