import axios from "axios";

const tempoApi = axios.create({
  baseURL: "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com",
});

export const getTeams = async () => {
  try {
    const response = await tempoApi.get("/teams");
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTeam = async (teamId: number) => {
  try {
    const response = await tempoApi.get(`/teams/${teamId}`);
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (teamId: number) => {
  try {
    const response = await tempoApi.get("/users");
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userId: number) => {
  try {
    const response = await tempoApi.get(`/users/${userId}`);
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
