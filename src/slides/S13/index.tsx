import React from "react";
import { Appear, Image, Text } from "spectacle";
import howToMigrateFromJsToTs from "./how_to_migrate_from_js_to_ts.gif";

export const S13 = () => (
  <>
    <Text textColor="primary">How to migrate a big codebase from JavaScript to TypeScript</Text>

    <Appear>
      <span aria-label="rotfl" role="img" style={{ fontSize: 96 }}>
        🤣
      </span>
    </Appear>

    <Appear>
      <Image src={howToMigrateFromJsToTs} />
    </Appear>
  </>
);
