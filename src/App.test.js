import { render, screen } from '@testing-library/react';
import App from './App';
import {rest} from "msw"; 
import {setupServer} from "./msw/node";
import {dogApi} from "./components/utils/dogapi";


const server = setupServer(
  rest.get("https://api.thedogapi.com/v1/images/search"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({breeds:{name:"Bull Terrier"}})
    )
  }
)


beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.restHandlers())

it("name of dog", async() => {
  const response = await dogApi()
  expect(response).toEqual({breeds:{name:"Bull Terrier"}})
})