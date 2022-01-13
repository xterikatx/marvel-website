import React from "react";
import { ComicCard } from ".";

describe("ComicCard", () => {
  it("given all components, then render without fail", () => {
    expect(<ComicCard />).toBeTruthy();
  });
});
