import { AppState } from "../AppState.js"

AppState
class SnacksService {
    // NOTE function of that add money to the browser so they could be able to purchase.
    addQuarter() {
        AppState.money += .25
        console.log('add money', AppState.money);
    }
    // NOTE  function that first find name of the item and after than loop over and find if user have enough money and not than it would throw an error.
    buySnack(snackName) {
        const snack = AppState.snacks.find(s => s.name === snackName)
        if (AppState.money < snack.price) {
            throw new Error('Not enough money to buy this snack')
        }
        AppState.money -= snack.price
        console.log(snackName, AppState.money)
    }
}

export const snacksService = new SnacksService()