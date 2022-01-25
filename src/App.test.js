// import { render, screen, waitFor } from '@testing-library/react';
// import App from './App';
// import {rest} from "msw"; 
// import {setupServer} from "msw/node";
// import {dogApi} from "./components/utils/dogapi";
import * as api from "./components/utils/dogapi";


jest.mock("./components/utils/dogapi");

 beforeEach(() => jest.clearAllMocks());
 it("api responds", async () => {
   api.dogApi.mockRejectedValue({
       breeds : [{name:"Affenpinscher"}]
   })
 })

 
// it("if api fails", async() => {
//   api.dogApi.mockRejectedValue({});
//   render(<App/>);
//   await waitFor(() => {
//     screen.getByText("Unable to fetch data");
//   });
// });

// const server = setupServer(
//   rest.get("https://api.thedogapi.com/v1/images/search"), (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({breeds:{name:"Affenpinscher"}})
//     )
//   }
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// it("test", async() => {
//   const response = await dogApi("Affenpinscher")
//   expect(response).toEqual({breeds:{name:"Affenpinscher"}})
// });

// it('handle failure', async () => {
//   server.use(
//     rest.get("https://api.thedogapi.com/v1/images/search"),(req, res, ctx) => {
//       return res(ctx.status(404));
//     })

//   await expect(dogApi("FAIL"," Affenpinscher")).rejects.toThrow("404");
// });

// it("test api", async() => {
//   const response = await dogApi()
//   expect(response).toEqual(1)
// });



// jest.mock("./components/utils/dogapi", () => {
//   return {
//     getHero: jest.fn().mockImplementation(() => {
//       return { name: "Affenpinscher" };
//     }),
//   };
// });

// test("renders learn react link", async () => {
//   const { findByText } = render(<App />);
//   const element = await findByText(/Affenpinscher/i);
//   expect(element).toBeInTheDocument();
// });


// test("renders App", async () => {
//   render(<App/>)
//   const element = await screen.findByText("All");
//   expect(element).toBeInTheDocument();
// })


