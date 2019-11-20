import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Notes, Text } from "spectacle";

export const S80 = () => (
  <>
    <Column paddingBottom={48}>
      <Heading>Conclusions</Heading>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">TS has definitely brought value in ProntoPro.</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">It's been a bumpy ride so far, but we're having fun!</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">TS is not a must-have: context is the king.</Text>
      </Column>
    </Appear>

    <Notes>
      TypeScript è stato un'ottima aggiunta alla nostra codebase. Abbiamo commesso errori, abbiamo preso decisioni
      sbagliate in questo breve viaggio, ma stiamo lavorando per risolvere questi problemi in futuro, convinti che il
      valore che TypeScript ha portato in codebase è di gran lunga superiore dei problemi che ha causato. Non mi sento
      di suggerire TypeScript a chiunque. Se non avete problemi di scalabilità, e non lo conoscete già, potrebbe finire
      per rallentarvi soltanto. Per noi, dato il nostro contesto, è stato un dealbreaker.
    </Notes>
  </>
);
