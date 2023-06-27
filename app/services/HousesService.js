import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    console.log('got houses', res.data)

    const builtHouses = res.data.map(housePojo => new House(carPojo))

    AppState.houses = builtHouses
  }

}
export const housesService = new HousesService()