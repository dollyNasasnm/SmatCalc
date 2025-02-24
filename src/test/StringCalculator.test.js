// test/StringCalculator.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    fireEvent.change(input, { target: { value: "" } });
    const button = screen.getByText("Calculate");
    fireEvent.click(button);
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("Result: 0");
  });
});
