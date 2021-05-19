import {Dispatch} from "redux";
import {api} from "../API/api";

type getDataACType = ReturnType<typeof getDataAC>
type setValueInputACType = ReturnType<typeof setValueInputAC>
type setFilteredDataACType = ReturnType<typeof setFilterDataAC>
type setValueCheckboxACType = ReturnType<typeof setValueCheckboxAC>
type setErrorACType = ReturnType<typeof setErrorAC>

export type ActionsType = getDataACType
    | setValueInputACType
    | setFilteredDataACType
    | setValueCheckboxACType
    | setErrorACType


const initialState = {
    data: [] as string[],
    valueInput: '' as string,
    valueCheckbox: false,
    filterData: [] as string[],
    error: ''
}
export type initialStateType = typeof initialState

export const getDataReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "getDataReducer/GET-DATA": {
            return {
                ...state,
                data: action.data
            }
        }
        case "getDataReducer/SET-FILTER-DATA": {
            return {
                ...state,
                filterData: action.filterData
            }
        }
        case "getDataReducer/SET-VALUE-CHECKBOX":
            return {
                ...state,
                valueCheckbox: action.valueCheckbox
            }
        case "getDataReducer/SET-ERROR":
            return {
                ...state,
                error: action.error
            }
        case "getDataReducer/SET-VALUE-INPUT": {
            return {
                ...state,
                valueInput: action.valueInput
            }
        }
        default:
            return state
    }
}


export const getDataAC = (data: string[]) => ({
    type: 'getDataReducer/GET-DATA', data
} as const)

export const setValueInputAC = (valueInput: string) => ({
    type: 'getDataReducer/SET-VALUE-INPUT', valueInput
} as const)

export const setFilterDataAC = (filterData: string[]) => ({
    type: 'getDataReducer/SET-FILTER-DATA', filterData
} as const)

export const setValueCheckboxAC = (valueCheckbox: boolean) => ({
    type: 'getDataReducer/SET-VALUE-CHECKBOX', valueCheckbox
} as const)

export const setErrorAC = (error: string) => ({
    type: 'getDataReducer/SET-ERROR', error
} as const)


export const getDataTC = () => (dispatch: Dispatch) => {
    return api.getData()
        .then((res) => {
            dispatch(getDataAC(res.data.data))
        })
        .catch((err) => {
            console.log(err)
        })
}

