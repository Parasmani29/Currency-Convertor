import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);


}

export default App

/* App Component
The App component is the main component that represents the currency converter application.
It utilizes various states managed by the useState hook to store different pieces of 
information:
amount: Stores the amount to be converted.
from: Represents the currency from which conversion is made.
to: Represents the currency to which conversion is made.
convertedAmount: Stores the calculated converted amount.
The useCurrencyInfo custom hook is imported and used to fetch currency information based on 
the from currency.
It retrieves currency options from fetched currency information using Object.keys(currencyInfo).
There are two functions defined:
swap(): Swaps the from and to currencies and updates the amount and convertedAmount accordingly.
convert(): Calculates the converted amount based on the provided amount and currency
 conversion rates (currencyInfo[to]).
Rendering UI
The UI consists of two InputBox components representing the "From" and "To" sections for
 currency conversion.
Each InputBox includes an input field for the amount and a dropdown for selecting the currency.
The "From" section allows the user to input an amount and select a currency for conversion.
The "To" section displays the converted amount and allows the user to select the target
 currency (but disables the amount input field).
A "Swap" button is provided to switch the from and to currencies.
Finally, a "Convert" button triggers the convert() function to perform the conversion when
 clicked.


Styling
Styling classes such as w-full, max-w-md, rounded-lg, bg-blue-600, etc., are used for layout 
and appearance purposes using Tailwind CSS classes.
The code aims to create a simple currency conversion UI where users can input an amount, 
select currencies, and convert between them. However, there are a couple of points that need 
attention for functionality:

In the InputBox component, the onCurrencyChange function should update the currency state 
(setFrom or setTo), but the provided implementation is setting the amount state instead.
The convert() function should multiply the amount by the currency conversion rate to calculate
 the converted amount accurately. Currently, it only updates convertedAmount with the provided
  amount.
The logic inside the convert() function and the way states are updated in swap() function
 might need adjustments for the conversion to work correctly.
Ensure that the state updates and conversion calculations are correctly implemented to achieve
 the desired currency conversion functionality.





 */


