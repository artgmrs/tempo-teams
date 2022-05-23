import React from "react";
import { render, screen } from "@testing-library/react";
import TeamsOverview from "./TeamsOverview";
import { Provider } from "react-redux";
import { store } from "shared/store/store";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<TeamsOverview />", () => {
  it("should fetch the teams and show a card for each one", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <TeamsOverview />
        </Provider>
      </Router>,
    );

    // wait until data is retrieved from mock server
    await screen.findByText(/fourth user/i);

    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
  it("should filter the teams", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <TeamsOverview />
        </Provider>
      </Router>,
    );

    // wait until data is retrieved from mock server
    await screen.findByText(/fourth user/i);

    userEvent.type(screen.getByPlaceholderText(/search team here.../i), "First User");

    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
  it("should show no teams", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <TeamsOverview />
        </Provider>
      </Router>,
    );

    // wait until data is retrieved from mock server
    await screen.findByText(/fourth user/i);

    userEvent.type(screen.getByPlaceholderText(/search team here.../i), "Fifth User");

    expect(screen.queryByRole("button")).toBeNull();
  });
});
