import React from "react";
import { ResultCard } from ".";

describe("ResultCard", () => {
  it("given all components, then render without fail", () => {
    expect(<ResultCard />).toBeTruthy();
  });
});