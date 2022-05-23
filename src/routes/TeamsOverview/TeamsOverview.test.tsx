import React from "react";
import { render, screen } from "@testing-library/react";
import TeamsOverview from "./TeamsOverview";
import { Provider } from "react-redux";
import { store } from "shared/store/store";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<TeamsOverview />", () => {
  it("should get the data and set members", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <TeamsOverview />
        </Provider>
      </Router>,
    );

    const out = await screen.findByText("user1");

    expect(out).toHaveTextContent("user1");
  });
});
