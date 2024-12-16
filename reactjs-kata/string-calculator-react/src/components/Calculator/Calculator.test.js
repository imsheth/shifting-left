import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator component", () => {
  test("renders user interface", () => {
    render(<Calculator />);
    expect(screen.getByText(/string calculator/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/add/i)).toBeInTheDocument();
  });

  test("adds '' to 0", () => {
    render(<Calculator />);
    const inputText = screen.getByLabelText(/input/i);
    const addButton = screen.getByLabelText(/add/i);
    const restultText = screen.getByTestId(/result/i);

    fireEvent.change(inputText, { target: { value: "" } });
    fireEvent.click(addButton);

    expect(restultText).toHaveTextContent(0);
  });

  test("adds '42' to 42", () => {
    render(<Calculator />);
    const inputText = screen.getByLabelText(/input/i);
    const addButton = screen.getByLabelText(/add/i);
    const restultText = screen.getByTestId(/result/i);

    fireEvent.change(inputText, { target: { value: "42" } });
    fireEvent.click(addButton);

    expect(restultText).toHaveTextContent(42);
  });

  test("adds '1,2' to 3", () => {
    render(<Calculator />);
    const inputText = screen.getByLabelText(/input/i);
    const addButton = screen.getByLabelText(/add/i);
    const restultText = screen.getByTestId(/result/i);

    fireEvent.change(inputText, { target: { value: "1,2" } });
    fireEvent.click(addButton);

    expect(restultText).toHaveTextContent(3);
  });

  test("adds '1,2,3,4,x' to 10", () => {
    render(<Calculator />);
    const inputText = screen.getByLabelText(/input/i);
    const addButton = screen.getByLabelText(/add/i);
    const restultText = screen.getByTestId(/result/i);

    fireEvent.change(inputText, { target: { value: "1,2,3,4,x" } });
    fireEvent.click(addButton);

    expect(restultText).toHaveTextContent(10);
  });

  test("adds '1\n2' to 3", () => {
    render(<Calculator />);
    const inputText = screen.getByLabelText(/input/i);
    const addButton = screen.getByLabelText(/add/i);
    const restultText = screen.getByTestId(/result/i);

    fireEvent.change(inputText, { target: { value: "1\n2" } });
    fireEvent.click(addButton);

    expect(restultText).toHaveTextContent(3);
  });
});
