// bun run test src/components/shared/__tests__/logo.shared.test.tsx

import { render } from "@testing-library/react";

import { Logo } from "@app/components/shared/logo.shared";

describe("Logo", () => {
  it("should render correctly", () => {
    const wrapper = render(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
