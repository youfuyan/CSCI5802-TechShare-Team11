import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import Calculator from '../Calculator';
import '@testing-library/jest-dom';


test('should render calculator', () => {
    render(<Calculator />)
    const calculatorElement = screen.getByTestId('calculator');
    expect(calculatorElement).toBeInTheDocument();
})

test('should change input element in calculator', () => {
    render(<Calculator />)
    const inputNum1 = screen.getByTestId('number1');
    const inputNum2 = screen.getByTestId('number2');
    fireEvent.change(inputNum1, {target: {value: 50}});
    fireEvent.change(inputNum2, {target: {value: 30}});
    expect(inputNum1.value).toBe('50');
    expect(inputNum2.value).toBe('30');
})

test('changing the input element in calculator should give the correct result in addition', () => {
    render(<Calculator />)
    const inputNum1 = screen.getByTestId('number1');
    const inputNum2 = screen.getByTestId('number2');
    fireEvent.change(inputNum1, {target: {value: 50}});
    fireEvent.change(inputNum2, {target: {value: 30}});
    expect(inputNum1.value).toBe('50');
    expect(inputNum2.value).toBe('30');
    const result = screen.getByTestId('answer');
    expect(result).toHaveTextContent('80');
})
