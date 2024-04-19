import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_kiV8aG4K1IVmF83PHMl8VNU6BFHXpCJYNjqJgqOX');


//convertCurrency("INR","USD",8);

export async function convertCurrency(fromCurrency, toCurrency, units){

    const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
});
const multiplier = res.data[toCurrency];
return multiplier*units;
}
