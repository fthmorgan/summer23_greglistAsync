export const CarsView = /*html*/`
<div class="container-fluid">
  <div class="row">
    <div class="col-12 p-4 d-flex">
      <h1>Cars</h1>
      <button id="carFormButton" class="btn btn-primary ms-3 d-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#carCollapse" aria-expanded="false" aria-controls="collapseExample">
        Car Form
      </button>
    </div>
  </div>
  <section class="row">
    <div class="col-10 m-auto">
      <div class="collapse" id="carCollapse">
        <div class="card card-body" id="car-form">
          STUB moved to static getter on car class
          <form onsubmit="app.CarsController.createCar(event)">

            <div>
              <label for="carMake">Make</label>
              <input type="text" id="carMake" minlength="3" maxlength="30" required name="make">
            </div>

            <div>
              <label for="carModel">Model</label>
              <input type="text" id="carModel" minlength="3" maxlength="40" required name="model">
            </div>

            <div>
              <label for="carYear">Year</label>
              <input id="carYear" type="number" min="1970" max="2024" required name="year">
            </div>

            <div>
              <label for="carImg">Image URL</label>
              <input type="url" id="carImg" maxlength="300" required name="imgUrl">
            </div>

            <div>
              <label for="carPrice">Price</label>
              <input class="w-100" type="range" id="carPrice" name="price" min="1" max="100000">
            </div>

            <div>
              <label for="carDescription">Description</label>
              <textarea id="carDescription" name="description" rows="10" class="w-50">
            </textarea>
            </div>

            <div>
              <label for="carColor">Color</label>
              <input type="color" id="carColor" name="color" value="#e66465" required>
            </div>

            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  </section>
  <div class="row" id="whipsList">

  </div>
</div>
`