import axios from "axios";


export const api = {
    getNumbers(value: number) {
        return axios.get(`https://pokeapi.co/api/v2/ability/${value}`)
    }
}

