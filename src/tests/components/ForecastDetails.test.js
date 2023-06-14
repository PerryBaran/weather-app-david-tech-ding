import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: 20,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 10,
      direction: "n",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details_date");
    expect(getByText("12°C")).toHaveClass("forecast-details_min-temp");
    expect(getByText("22°C")).toHaveClass("forecast-details_max-temp");
    expect(getByText("20 %")).toHaveClass("forecast-details_humidity");
    expect(getByText("10 mph")).toHaveClass("forecast-details_wind-speed");
    expect(getByText("n")).toHaveClass("forecast-details_wind-direction");
  });
});
