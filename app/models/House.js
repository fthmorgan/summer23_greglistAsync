export class House {
  constructor(data) {
    this.id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl || "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator

  }
  get CardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
      <section class="row bg-light elevation-5 house" style="border-color:black">
        <div class="col-11 col-md-4 p-0">
          <img class="img-fluid house-img" src="${this.imgUrl}" alt="house">
        </div>
        <div class="col-12" col-md-8 p-3>
          <h2>${this.year}</h2>
          <h3>${this.price}</h3>
          <p>${this.description}</p>
          <h4>${this.createdAt.toLocaleString()}</h4>
          <div class="d-flex align-items-center mb-3">
            <h5 class="me-3">${this.creator.name}</h5>
            <img class="img-fluid creator-picture" src="${this.creator.picture}" alt="${this.creator.name}">
          </div>

        </div>
      </section>
    </div>
`
  }
}
