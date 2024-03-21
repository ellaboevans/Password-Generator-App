import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import CheckBox from "../../src/components/CheckBox";

describe("CheckBox", () => {
  it("should render a label", () => {
    render(
      <CheckBox
        text="Include uppercase letters"
        id="iul"
        setter={() => {
          console.log("setter in test");
        }}
      />
    );
    const label = screen.getByText(/Include uppercase letters/i);
    expect(label).toBeInTheDocument();
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label).toHaveTextContent(/Include uppercase letters/i);
  });
});
