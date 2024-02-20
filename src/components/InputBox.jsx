import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


/* the code you provided is a React functional component named InputBox that 
represents an input box for entering an amount and selecting a currency. Let me 
explain the code in detail:

Component Structure:

The InputBox component receives several props:
label: Represents the label text for the input field.
amount: Holds the value of the amount.
onAmountChange: Event handler function triggered when the amount changes.
onCurrencyChange: Event handler function triggered when the currency selection changes.

currencyOptions: An array containing the available currency options.
selectCurrency: The default currency value.
amountDisable: Boolean indicating if the amount input should be disabled.
currencyDisable: Boolean indicating if the currency selection should be disabled.
className: Additional CSS classes for styling purposes.
Unique ID for Input:

The useId hook is used from an unknown library (not a standard React hook)
 to generate a unique ID for the input element. This unique ID is stored in the 
 amountInputId variable and is used as the id attribute for the input element.
 
Component Structure:

The component is divided into two halves using Flexbox:
The first half contains the amount input field.
The second half contains the currency selection dropdown.
Amount Input Field:

It consists of a label and an <input> element.
The label is associated with the input using the htmlFor attribute, linking to the
 generated amountInputId.
The input field is of type "number" and has an onChange handler that triggers the 
onAmountChange callback with the parsed numeric value of the input.
Currency Selection Dropdown:

It contains a label and a <select> element.
The label displays "Currency Type".
The <select> element is populated with options from the currencyOptions array. Each 
option represents a currency.
The onChange handler triggers the onCurrencyChange callback, passing the selected 
currency value.
Disabled Inputs:

The disabled attribute is used for the amount input and currency selection based on
 the amountDisable and currencyDisable props, respectively.
Styling:

Various CSS classes like bg-white, rounded-lg, text-sm, etc., are used for styling the
 input box and its contents.
Overall, this component renders an input box for entering an amount and selecting a 
currency with appropriate event handling and conditional disabling based on props 
provided to the component.*/