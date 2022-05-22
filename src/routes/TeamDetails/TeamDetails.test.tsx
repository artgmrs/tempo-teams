import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import TeamDetails from "./TeamDetails";

describe("<TeamDetails />", () => {
  it("should be in the doc", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <TeamDetails />
      </Router>,
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
