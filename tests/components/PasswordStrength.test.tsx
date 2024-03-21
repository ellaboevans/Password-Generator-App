import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import PasswordStrength from "../../src/components/PasswordStrength";

describe("Password Strength", () => {
  it("should render a text", () => {
    render(<PasswordStrength strengthValue={0} />);

    const strength = screen.getByText(/STRENGTH/i);
    expect(strength).toBeInTheDocument();
  });

  it("should render with correct strength and color based on strengthValue", () => {
    // Render with strengthValue of 0
    const { rerender, getAllByText } = render(
      <PasswordStrength strengthValue={1} />
    );

    let strengths = getAllByText(/TOO WEAK!/i);
    strengths.forEach((strength) => {
      expect(strength).toBeInTheDocument();
      expect(strength).toBeTruthy();
    });

    // Rerender with strengthValue of 1
    rerender(<PasswordStrength strengthValue={2} />);

    strengths = getAllByText(/WEAK/i);
    strengths.forEach((strength) => {
      expect(strength).toBeInTheDocument();
      expect(strength).toBeTruthy();
    });

    // Rerender with strengthValue of 2
    rerender(<PasswordStrength strengthValue={3} />);

    strengths = getAllByText(/MEDIUM/i);
    strengths.forEach((strength) => {
      expect(strength).toBeInTheDocument();
      expect(strength).toBeTruthy();
    });

    // Rerender with strengthValue of 3
    rerender(<PasswordStrength strengthValue={4} />);
    strengths = getAllByText(/STRONG/i);
    strengths.forEach((strength) => {
      expect(strength).toBeInTheDocument();
      expect(strength).toBeTruthy();
    });
  });
});
