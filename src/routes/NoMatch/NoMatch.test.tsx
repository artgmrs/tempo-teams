import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import NoMatch from "./NoMatch";

describe("<NoMatch />", () => {
  it("should show no match", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <NoMatch />,
      </Router>,
    );

    expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });
});
