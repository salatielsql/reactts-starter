/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ButtonTest } from "./ButtonTest";

describe("Render button properly", () => {
  test("has correct text", () => {
    render(<ButtonTest />);

    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });

  test("button texts changes on click", () => {
    render(<ButtonTest />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toHaveTextContent("Button Updated");
  });
});
