import React from "react";
import { MyMapComponent } from ".";

describe("Maps", () => {
  it("given all components, then render without fail", () => {
    expect(<MyMapComponent />).toBeTruthy();
  });
});
