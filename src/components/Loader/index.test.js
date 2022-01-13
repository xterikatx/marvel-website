import React from "react";
import { Loader } from ".";

describe("Loader", () => {
  it("given all components, then render without fail", () => {
    expect(<Loader />).toBeTruthy();
  });
});
