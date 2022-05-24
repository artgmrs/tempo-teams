import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import TeamMemberType from "shared/types/teamMemberType";
import MemberCard from "./MemberCard";

describe("<MemberCard />", () => {
  it("should render the card correctly", async () => {
    const history = createMemoryHistory();
    const mockMember: TeamMemberType = {
      id: "123",
      firstName: "First",
      lastName: "Last",
      displayName: "firstLast",
      avatarUrl: "someurl.com",
      location: "brazil",
    };

    render(
      <Router location={history.location} navigator={history}>
        <MemberCard member={mockMember} />,
      </Router>,
    );

    expect(screen.getByText(`${mockMember.firstName} ${mockMember.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(mockMember.location)).toBeInTheDocument();
  });
});
