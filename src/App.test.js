import { render, screen } from '@testing-library/react';
import App from './App';
import {rest} from "msw"; 
import {setupServer} from "msw/node";
import {dogApi} from "./components/utils/dogapi";

const server = setupServer(
  rest.get("https://api.thedogapi.com/v1/images/search"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({breeds:{name:"Tibetan Terrier"}})
    )
  }
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("test", async() => {
  const response = await dogApi("Tibetan Terrier")
  expect(response).toEqual("Tibetan Terrier")
});

