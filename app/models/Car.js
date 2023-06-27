import { AppState } from "../AppState.js"

export class Car {
  constructor (data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    this.color = data.color || '#000000'
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }

  get CardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
      <section class="row bg-light elevation-5 car-border" style="border-color: ${this.color};">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid car-img"
            src="${this.imgUrl}"
            alt="${this.make} ${this.model}">
            </div>
            <div class="col-12 col-md-8 p-3">
            <h2>${this.year} ${this.make} ${this.model}</h2>
            <h3>$${this.price}</h3>
            <p>${this.description}</p>
            <h4>${this.createdAt.toLocaleString()}</h4>
            <div class="d-flex align-items-center">
              <h5 class="me-3">${this.creator.name}</h5>
              <img class="img-fluid creator-picture"
                src="${this.creator.picture}"
                alt="${this.creator.name}">
            </div>
            ${this.ComputeDeleteButton}
        </div>
      </section>
    </div>
    `
  }

  get ComputeDeleteButton() {
    if (!AppState.account || AppState.account.id != this.creatorId) {
      return ''
    }
    return `<button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-danger">Delete Car</button>`
  }

}


// let carData = {
//   "_id": "6462ed1266d4560e6cfa0f39",
//   "id": "6462ed1266d4560e6cfa0f39",
//   "make": "Honda",
//   "model": "Accord",
//   "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
//   "year": 2022,
//   "price": 1500,
//   "description": "zoom zoom",
//   "engineType": "unknown",
//   "creatorId": "63f7d6202d1cf882287f12e2",
//   "createdAt": "2023-05-16T02:40:18.318Z",
//   "updatedAt": "2023-05-16T02:40:18.318Z",
//   "__v": 0,
//   "creator": {
//     "_id": "63f7d6202d1cf882287f12e2",
//     "name": "Charles Francis Xavier",
//     "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//     "id": "63f7d6202d1cf882287f12e2"
//   },
// }