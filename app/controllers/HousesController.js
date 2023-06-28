import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
  const houses = AppState.houses
  let template = ''
  houses.forEach(house => template += house.CardTemplate)
  setHTML('whipsList', template)
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded');
    this.getHouses()


    AppState.on('houses', _drawHouses)

  }
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }


}