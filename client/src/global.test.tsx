import ReactDOM from 'react-dom'
import { render, screen,  fireEvent } from '@testing-library/react'
import {Counter, TestButton} from './dummyComponents'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
    document.body.innerHTML = ''
})

test('button displays as expected via ReactDOM', () => {
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(<TestButton />, div)
})

test('button displays as expected via @testing-library/react', () => {
    render(<TestButton />)
})

test("counter increments and decrements when the buttons are clicked", () => {
    const {container} = render(<Counter />)

    const decrement = screen.getByRole('button', {name: /decrement/i})
    const increment = screen.getByRole('button', {name: /increment/i})
    const message = screen.getByText(/current count/i)


    expect(message.textContent).toBe('Current count: 0')

    fireEvent.click(increment)
    expect(message).toHaveTextContent('Current count: 1')
    fireEvent.click(decrement)
    expect(message).toHaveTextContent('Current count: 0')
})
