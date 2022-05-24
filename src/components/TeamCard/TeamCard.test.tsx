import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TeamCard from "./TeamCard";

describe("<TeamCard />", () => {
  it("should call the function when clicked", async () => {
    const mockFunction = jest.fn();

    render(<TeamCard id="123" name="Test" handleTeamCardClick={mockFunction} />);

    userEvent.click(screen.getByText(/test/i));
    expect(mockFunction).toBeCalledTimes(1);
  });
});
