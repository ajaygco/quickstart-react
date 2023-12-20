// yarn test src/components/pages/__tests__/splash.test.jsx

import React from "react";
import { render } from "@testing-library/react";

import { Splash } from "components/pages/splash/splash";

describe("Splash", () => {
  it("should render correctly", () => {
    const wrapper = render(<Splash />);

    expect(wrapper).toMatchSnapshot();
  });
});
