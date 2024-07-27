// bun run test src/components/pages/not-found/__tests__/not-found.test.tsx

import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { NotFound } from "@app/components/pages/not-found/not-found";

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
