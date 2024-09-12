export const SERVER_BASE_URL = "http://localhost:5555"

export function convertDenomToMicroDenom(
    amount,
    denom = 6
) {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount * 10 ** 6;
    return isNaN(amount) ? "0" : String(amount).split(".")[0];
}


export function convertMicroDenomToDenom(
    amount
) {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount / 10 ** 6;
    return isNaN(amount) ? 0 : amount;
}