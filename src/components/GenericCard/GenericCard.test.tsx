import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenericCard from "./GenericCard";

describe("<GenericCard />", () => {
  it("should call the function when clicked", async () => {
    const mockFunction = jest.fn();

    render(<GenericCard id="123" name="Test" handleCardClick={mockFunction} />);

    userEvent.click(screen.getByText(/test/i));
    expect(mockFunction).toBeCalledTimes(1);
  });
});
