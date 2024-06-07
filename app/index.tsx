import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@cqcl/quantinuum-ui";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Button />
  </StrictMode>
);
