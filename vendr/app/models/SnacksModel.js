export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  getSnacksHTMLTemplate(isDisabled) {
    return `<div class="col-4">
        <div class="d-flex align-items-center justify-content-center">
          <div class="card mt-3" style="width: 18rem;">
          <img
          src="${this.imgUrl}"
          class="card-img-top" alt="${this.name}">
          <div class="card-body bg-dark text-light">
          <h5 class="card-title fs-2">${this.name}</h5>
          <p class="card-text"></p>
          <div class="d-flex">
          <label class="align-self-end" for="price">$${this.price.toFixed(2)}</label>
          <button class="btn btn-primary ms-auto ${isDisabled ? 'disabled' : ''}" onclick="app.SnacksController.buySnack('${this.name}')" ${isDisabled ? 'disabled' : ''}>Buy</button>
          </div>
          </div>
          </div>
          </div>
        </div>`
  }
}