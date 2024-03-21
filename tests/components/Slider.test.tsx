import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import Slider from "../../src/components/Slider";

describe("Slider", () => {
  it("should render a slider", () => {
    render(<Slider min={0} max={36} classes="" />);

    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toBeInstanceOf(HTMLInputElement);
    expect(slider).toHaveAttribute("min", "0");
    expect(slider).toHaveAttribute("max", "36");
  });
});
