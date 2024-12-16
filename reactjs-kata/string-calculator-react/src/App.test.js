import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders user widgets", () => {
    render(<App />);
    expect(screen.getByText(/user widgets/i)).toBeInTheDocument();
    expect(screen.getByText(/string calculator/i)).toBeInTheDocument();
  });
});
