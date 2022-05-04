import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SearchHeader } from "./SearchHeader";
import userEvent from "@testing-library/user-event";

describe("<SearchHeader>", () => {
  test("should render the correct title", () => {
    render(<SearchHeader onSearch={jest.fn} />);

    expect(
      screen.getByRole("heading", {
        name: /image search/i
      })
    ).toBeVisible();
  });

  test("should call onSearch with the correct search term", async () => {
    const onSearchMock = jest.fn();
    render(<SearchHeader onSearch={onSearchMock} />);

    expect(
      screen.getByRole("heading", {
        name: /image search/i
      })
    ).toBeVisible();

    userEvent.type(
      screen.getByPlaceholderText("Search for images"),
      "a search string"
    );

    await waitFor(() =>
      expect(onSearchMock).toHaveBeenCalledWith("a search string")
    );
  });
});
