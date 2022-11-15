import {api} from "../api/api";
import {Dispatch} from "redux";


const initialState = {
    status: ""
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SET-STATUS":
            return {...state, status: action.status}

        default:
            return state
    }
}
//actions
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const sendNumberTC = (value: number) => (dispatch: Dispatch) => {
     api.getNumbers(value)
         .then((res) => {
             if (res.status === 200) {
                 dispatch(setStatusAC("Request successful"))
             }
         })
         .catch(e=> dispatch(setStatusAC(e.response.data)))
}
