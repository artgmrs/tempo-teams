import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import SearchField from "./SearchField";

describe("<SearchField />", () => {
  it("should call the function when user type", async () => {
    const history = createMemoryHistory();
    const mockFunction = jest.fn();

    render(
      <Router location={history.location} navigator={history}>
        <SearchField handleChange={mockFunction} label="placeholder text" value="Test" />,
      </Router>,
    );

    userEvent.type(screen.getByText(/placeholder text/i), "1234");

    expect(mockFunction).toBeCalledTimes(4);
  });
});
