// yarn test source/components/shared/__tests__/logo.shared.test.jsx

import * as React from "react";
import { render } from "@testing-library/react";

import { Logo } from "@app/components/shared/logo.shared";

describe("Logo", () => {
  it("should render correctly", () => {
    const wrapper = render(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
