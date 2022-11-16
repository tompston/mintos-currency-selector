/**
 * Pass down array of values and a value from the  array.
 * If the passed down value matches a value in the array, delete it
 */
export function deleteValueFromArrayOfStrings(arr: string[], array_value: any): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == array_value) {
            arr.splice(i, 1)
        }
    }
}

/**
 * @param {string} currency string that holds the currency symbol
 * @param {string[]} selected_currencies ref array that holds the selected options
 * @param {string[]} default_array ref array of strings from which the default value is deleted
 */
export function appendToCurrencyArrayAndRemoveFromDefaultArray(currency: string, selected_currencies: string[], default_array: string[]): void {
    selected_currencies.push(currency)
    deleteValueFromArrayOfStrings(default_array, currency)
}