import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
    constructor() {
        console.log('snacks vender loaded');

        //NOTE added a listener
        AppState.on('money', this.drawTotal)
        AppState.on('money', this.drawSnacks)
        AppState.on('snacks', this.drawSnacks)

        this.drawSnacks()
        this.drawTotal()
    }
    // NOTE function that helps the controller read the function from the service
    addQuarter() {
        console.log('add buy button');
        snacksService.addQuarter()
        this.drawTotal()
    }
    // NOTE draw snacks from the appstate and display it to the browser and disable any button that doesn't have enough money to buy.
    drawSnacks() {
        console.log('draw snacks on page');
        const snacks = AppState.snacks
        let snacksHTML = ''
        snacks.forEach(snack => {
            const isDisabled = AppState.money < snack.price
            snacksHTML += snack.getSnacksHTMLTemplate(isDisabled)
        })
        const snacksElm = document.getElementById('Snacks vender')
        snacksElm.innerHTML = snacksHTML
    }
    // NOTE draw information from the appstate to the html code and enable it to be display to the browser
    drawTotal() {
        const money = AppState.money
        console.log('load total money ', money);
        const totalElm = document.getElementById('total amount')
        totalElm.innerHTML = `$${money.toFixed(2)}`
    }
    // NOTE first find the snack name and loop over the if statement trying to find if user have enough money and if the user do have enough money than the function will subtract and extra from the price of the item.
    buySnack(snackName) {
        const snack = AppState.snacks.find(s => s.name === snackName)
        if (AppState.money < snack.price) {
            console.log(snackName)
            return
        }
        AppState.money -= snack.price
        console.log(snackName, AppState.money.toFixed(2))
    }
}
