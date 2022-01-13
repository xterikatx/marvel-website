import App from "./App";
import React from "react";

describe("App", () => {
  it("given all components, then render without fail", () => {
    expect(<App />).toBeTruthy();
  });
});
