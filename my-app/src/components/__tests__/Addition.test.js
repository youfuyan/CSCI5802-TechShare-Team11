import {render, screen, cleanup} from '@testing-library/react';
import Addition from '../Addition';
import '@testing-library/jest-dom';


test('should properly add 2 negative numbers', () => {
    const props = {number1: -23, number2: -39}
    render(<Addition number1={props.number1} number2={props.number2} />)
    
    const result = screen.getByTestId('answer');
    expect(result).toHaveTextContent('-62');
})

test('should properly add 2 negative numbers', () => {
    const props = {number1: -23, number2: -39}
    render(<Addition number1={props.number1} number2={props.number2} />)
    const result = screen.getByTestId('answer');
    expect(result).toHaveTextContent('-62');
})

test('should properly add 1 negative number and one positive number', () => {
    const props = {number1: -23, number2: 39}
    render(<Addition number1={props.number1} number2={props.number2} />)
    const result = screen.getByTestId('answer');
    expect(result).toHaveTextContent('16');
})

test('should properly add 2 numbers', () => {
    const props = {number1: 23, number2: 39}
    render(<Addition number1={props.number1} number2={props.number2} />)
    const result = screen.getByTestId('answer');
    expect(result).toHaveTextContent('62');
})

test('should render addition', () => {
    render(<Addition />)
    const additionElement = screen.getByTestId('addition');
    expect(additionElement).toBeInTheDocument();
})