import React from "react";
import { Search } from ".";

describe("Search", () => {
  it("given all components, then render without fail", () => {
    expect(<Search />).toBeTruthy();
  });
});
