// yarn test src/components/pages/__tests__/not-found.test.jsx

import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NotFound } from "components/pages/not-found/not-found";

describe("NotFound", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
