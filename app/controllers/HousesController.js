import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    console.log('houses controller loaded');
    this.getHouses()

    // const builtHouses = res.data.map(housePojo => new House(carPojo))
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