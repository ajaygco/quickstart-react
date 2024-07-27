// bun run test src/components/pages/home/__tests__/home.test.tsx

import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { Home } from "@app/components/pages/home/home";

describe("Home", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
