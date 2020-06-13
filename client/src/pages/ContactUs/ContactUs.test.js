import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "./ContactUs";

test("renders contact us h1", () => {
  const { getByText } = render(<ContactUs />);
  const linkElement = getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});
