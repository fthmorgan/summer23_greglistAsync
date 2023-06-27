import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let template = ''
  cars.forEach(car => template += car.CardTemplate)
  setHTML('whipsList', template)
}

function _showFormButton() {
  const account = AppState.account

  if (!account) {
    return
  }

  const carFormButton = document.getElementById('carFormButton')
  carFormButton.classList.remove('d-none')
}


export class CarsController {
  constructor () {
    console.log('cars controller loaded');
    this.getCars()

    AppState.on('cars', _drawCars)
    AppState.on('account', _drawCars)
    AppState.on('account', _showFormButton)
  }

  // TODO CRUD ROUTES
  // REVIEW UPDATE

  // REVIEW READ / GET
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  // REVIEW CREATE
  async createCar(event) {
    try {
      event.preventDefault()

      const form = event.target

      const carData = getFormData(form)

      console.log('car data!', carData);

      await carsService.createCar(carData)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  // REVIEW DELETE
  async deleteCar(carId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this car?')

      if (!wantsToDelete) {
        return
      }


      await carsService.deleteCar(carId)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

}