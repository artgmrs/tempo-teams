import { rest } from "msw";

const mockBaseUrl = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com";

const mockTeamsReponse = [
  { id: "1", name: "Ordinary Coral Lynx" },
  { id: "2", name: "Weekly Peach Wildebeest" },
  { id: "3", name: "Surrounding Gold Pheasant" },
  { id: "4", name: "Resident Scarlet Hare" },
];

const mockUserResponseIdOne = {
  id: "1",
  firstName: "Gianni",
  lastName: "Wehner",
  displayName: "gianniWehner",
  avatarUrl: "https://cdn.fakercloud.com/avatars/rude_128.jpg",
  location: "Brakusstad",
};

const mockUserResponseIdTwo = {
  id: "2",
  firstName: "Jaren",
  lastName: "Kerluke",
  displayName: "jarenKerluke",
  avatarUrl: "https://cdn.fakercloud.com/avatars/rude_128.jpg",
  location: "New Felixtown",
};

const mockUserResponseIdThree = {
  id: "3",
  firstName: "Marion",
  lastName: "Kertzmann",
  displayName: "marionKertzmann",
  avatarUrl: "https://cdn.fakercloud.com/avatars/rude_128.jpg",
  location: "Botsfordtown",
};

const mockUserResponseIdTen = {
  id: "10",
  firstName: "Travon",
  lastName: "Nikolaus",
  displayName: "travonNikolaus",
  avatarUrl: "https://cdn.fakercloud.com/avatars/rude_128.jpg",
  location: "Port Breanna",
};

const mockTeamResponseIdOne = {
  id: "1",
  name: "Ordinary Coral Lynx",
  teamLeadId: 10,
  teamMemberIds: [1, 2, 3],
};

export const handlers = [
  rest.get(mockBaseUrl + "/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserResponseIdOne));
  }),

  rest.get(mockBaseUrl + "/users/2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserResponseIdTwo));
  }),

  rest.get(mockBaseUrl + "/users/3", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserResponseIdThree));
  }),

  rest.get(mockBaseUrl + "/users/10", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUserResponseIdTen));
  }),

  rest.get(mockBaseUrl + "/teams", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTeamsReponse));
  }),

  rest.get(mockBaseUrl + "/teams/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTeamResponseIdOne));
  }),
];
