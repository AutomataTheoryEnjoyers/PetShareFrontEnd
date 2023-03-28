import { rest } from "msw";
import { BACKEND_URL } from "../consts";

export const handlers = [
  rest.get(BACKEND_URL + 'pet', (req, res, ctx) => {
    return res(ctx.json([
      {
        id: "111111",
        name: "fifik1"
      },
      {
        id: "222222",
        name: "fifik2"
      },
    ]))
  })
]
