import React from "react";
import { NoResults } from ".";

describe("NoResults", () => {
  it("given all components, then render without fail", () => {
    expect(<NoResults />).toBeTruthy();
  });
});
