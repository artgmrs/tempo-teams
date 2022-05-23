import { rest } from "msw";

const mockEndpoint = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com";

const mockTeamsReponse = [
  { id: "1", name: "user1" },
  { id: "2", name: "user2" },
  { id: "3", name: "user3" },
  { id: "4", name: "user4" },
];

const mockUserResponse = {
  id: "1",
  displayName: "user",
};

export const handlers = [
  rest.get(mockEndpoint + "/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserResponse));
  }),

  rest.get(mockEndpoint + "/teams", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTeamsReponse));
  }),
];
