import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import PasswordHolder from "../../src/components/PasswordHolder";
import React from "react";
import "@testing-library/jest-dom/vitest";

describe("Password", () => {
  it("should render random string of characters when generated with RegEx", () => {
    render(<PasswordHolder />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/^[a-zA-Z0-9!@#$%^&*()_+]{1,}$/);
  });
});
