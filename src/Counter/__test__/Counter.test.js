 import React from 'react'
 import Counter from '../Counter' //we have imported the Counter component to render it in the test
 import  {render, fireEvent} from '@testing-library/react' //inorder to render our test in a virtual DOM
 import '@testing-library/jest-dom/extend-expect'

 test('Header Renders With Correct Text', () => {
     const  {getByTestId} = render(<Counter />); //we have passed the Counter component to render it in the test
     const headerElement = getByTestId("header")
     //now we can assert some sort of test
     expect(headerElement.textContent).toBe("Counter Header")
 })

 test("counter initially starts with 0", () => {
     const {getByTestId} = render(<Counter />)
     const counterElement = getByTestId("counter")

     expect(counterElement.textContent).toBe("0");
 })
//This represent the intial test case
 test("input value is 1 initially", () => {
     const {getByTestId} = render(<Counter />);
     const inputElement = getByTestId("input");
     expect(inputElement.value).toBe("1");
 })

 test("add button renders with correct symbol", () => {
     const {getByTestId} = render(<Counter />);
     const addButtonElement = getByTestId("addButton");

     expect(addButtonElement.textContent).toBe("+");
 })

 test("substract button renders with correct symbol", () => {
     const {getByTestId} = render(<Counter />);
     const substractButtonElement = getByTestId("substractButton");

     expect(substractButtonElement.textContent).toBe("-");
    })

test("input after the change works correctly", () => {
    const {getByTestId} = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "2"
        }
    })

    expect(inputEl.value).toBe("2");

})

test("clicking on + button adds one to counter", () => {
    const {getByTestId} = render(<Counter />);
    const addButtonEl = getByTestId("addButton");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(addButtonEl);
    expect(counterEl.textContent).toBe("1");
})

test("clicking on - button substract one from counter", () => {
    const {getByTestId} = render(<Counter />);
    const substractButtonElement = getByTestId("substractButton");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(substractButtonElement);
    expect(counterEl.textContent).toBe("-1");
})

test("by changing input, we are successfully able to add the counter", () => {
    const {getByTestId} = render(<Counter />);
    const inputEl = getByTestId("input");
    const counterEl = getByTestId("counter");
    const addButtonEl = getByTestId("addButton");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addButtonEl);
    expect(counterEl.textContent).toBe("5");
})


test("by changing input, we are successfully able to substract the counter", () => {
    const {getByTestId} = render(<Counter />);
    const inputEl = getByTestId("input");
    const counterEl = getByTestId("counter");
    const substractButtonElement = getByTestId("substractButton");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(substractButtonElement);
    expect(counterEl.textContent).toBe("-5");
})

//testing few add clicks and few substract clicks

test("click on add and click on substract yields the correct result", () => {
    const {getByTestId} = render(<Counter />);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const addButtonEl = getByTestId("addButton");
    const substractButtonEl = getByTestId("substractButton");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addButtonEl);
    fireEvent.click(addButtonEl);
    fireEvent.click(addButtonEl);
    fireEvent.click(addButtonEl);
    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addButtonEl);
   
    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);
    expect(counterEl.textContent).toBe("15");
})

test("CounterEl contains correct className", () => {

    const {getByTestId} = render(<Counter />);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const substractButtonEl = getByTestId("substractButton");
    const addButtonEl = getByTestId("addButton");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
})
    fireEvent.click(addButtonEl);
    expect(counterEl.className).toBe('')

    fireEvent.click(addButtonEl);
    expect(counterEl.className).toBe('green')

    fireEvent.click(addButtonEl);
    expect(counterEl.className).toBe('green')

    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);

    expect(counterEl.className).toBe('')
    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);
    fireEvent.click(substractButtonEl);

    expect(counterEl.className).toBe('red')


})