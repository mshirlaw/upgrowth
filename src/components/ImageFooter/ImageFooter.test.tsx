import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ImageFooter } from "./ImageFooter";

describe("<ImageFooter>", () => {
  test("should render the footer", () => {
    render(<ImageFooter likes={5} username={"john"} />);

    expect(screen.getByText(/5/i)).toBeVisible();
    expect(screen.getByText(/@john/i)).toBeVisible();
  });
});
