import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

/* Importing React Hooks:

useEffect and useState are imported from the React library. These hooks are used to manage 
state and perform side effects in functional components.

Defining the Custom Hook (useCurrencyInfo):

The useCurrencyInfo hook takes a currency parameter, representing the currency code for which
 the information is to be fetched.


State Initialization:

useState is used to create a state variable named data initialized with an empty object {}.


Fetching Currency Information:

useEffect is utilized to perform a side effect, in this case, an API fetch operation. 
It runs whenever the currency value changes.
The fetch function is called to retrieve data from a specific URL based on the provided 
currency value.
After fetching the data, the response is converted to JSON format using res.json().
The retrieved data corresponding to the provided currency is set into the data state using 
setData(res[currency]).
Logging Data:

Two console.log(data) statements are present in the code:
The first console.log(data) is inside the useEffect hook, which logs the fetched data after it's 
updated due to state changes.
The second console.log(data) is outside the useEffect hook, which logs the previous value of
 data. Please note that this may not display the updated data immediately due to the asynchronous nature of React state updates.
Returning Data:

The hook returns the data state, which contains the fetched currency information.
Exporting the Hook:

Finally, the useCurrencyInfo hook is exported to be used in other components. */
