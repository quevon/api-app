import { render, screen } from '@testing-library/react';
import App from './App';
import {catApi} from "./utils/catapi";
// import {dogApi} from "./utils/dogapi";
import {mockCatData} from "./utils/mockCatData";

jest.mock("./utils/catapi");
// jest.mock("./utils/dogapi");


// testing cat api
test("renders the app", async () => {
    catApi.mockImplementation(() => {
    return mockCatData;
  });
    const {findByText} = render (<App/>);
    const Name = await findByText("Name:");
    const Temperament = await findByText("Temperament:");
    const Origin = await findByText("Origin:");
    const Description = await findByText("Description:");
    const Life_Span = await findByText("Life Span:");
    expect (Name).toBeInTheDocument();
    expect (Temperament).toBeInTheDocument();
    expect (Origin).toBeInTheDocument();
    expect (Description).toBeInTheDocument();
    expect (Life_Span).toBeInTheDocument();
});

test("renders the name", async () => {
  catApi.mockImplementation(() => {
  return mockCatData;
});
  const {findByText} = render (<App/>);
  const Name = await findByText(/Doo/i);
  expect (Name).toBeInTheDocument();
});

// testing dog api

// test("renders the app", async () => {
//   dogApi.mockImplementation(() => {
//   return mockData;
// });
//   const {findByText} = render (<App/>);
//   const Name = await findByText("Name:");
//   const Temperament = await findByText("Temperament:");
//   const Breed_Group = await findByText("Breed Group:");
//   const Life_Span = await findByText("Life Span:");
//   expect (Name).toBeInTheDocument();
//   expect (Temperament).toBeInTheDocument();
//   expect (Breed_Group).toBeInTheDocument();
//   expect (Life_Span).toBeInTheDocument();
// });