import React from "react";
import { Header } from ".";

describe("Header", () => {
  it("given all components, then render without fail", () => {
    expect(<Header />).toBeTruthy();
  });
});
