import React from "react";
import { render } from "@testing-library/react";
import Admin from "./Admin";

test("renders contact us h1", () => {
  const { getByText } = render(<Admin />);
  const linkElement = getByText(/Admin/i);
  expect(linkElement).toBeInTheDocument();
});
