import { rest } from "msw";
import { mockAnnouncements, mockApplications, mockPets } from "./mockData";
import { BACKEND_URL } from "../backendUrl";

export const handlers = [
  // ANNOUNCEMENT
  rest.get(BACKEND_URL + "announcements", (req, res, ctx) => {
    // return response
    return res(ctx.status(200), ctx.json(mockAnnouncements));
  }),

  rest.post("/announcements", (req, res, ctx) => {
    // return response
    return res(ctx.status(200), ctx.json(mockApplications));
  }),

  rest.get("/pet", (req, res, ctx) => {
    // return response
    return res(ctx.status(200), ctx.json(mockPets));
  }),
];
