import React from "react";
import { Modal } from ".";

describe("Modal", () => {
  it("given all components, then render without fail", () => {
    expect(<Modal />).toBeTruthy();
  });
});