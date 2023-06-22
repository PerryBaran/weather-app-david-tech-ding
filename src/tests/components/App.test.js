import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

// describe("App", () => {
//   test("renders the App component correctly", () => {
//     render(<App location={forecast.location} forecasts={forecast.forecasts} />);
//     const h1Element = screen.getByText(/Manchester, UK/i);
//     expect(h1Element).toBeInTheDocument();
//   });
// });

describe("App", () => {
  test("renders the App component correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: forecast,
    });
    const { asFragment } = render(<App />);
    await waitFor(() => {
      const h1Element = screen.getByText(/Manchester, UK/i);

      expect(h1Element).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
