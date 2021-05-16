import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {setFilterDataAC} from "../store/reducer";


export const ButtonSubstring = () => {

    const dispatch = useDispatch()
    const valueCheckbox = useSelector<RootStateType, boolean>(state => state.data.valueCheckbox)
    const data = useSelector<RootStateType, string[]>(state => state.data.data)
    const valueInput = useSelector<RootStateType, string>(state => state.data.valueInput)

    const onClickSubStringHandler =() => {
        valueCheckbox
            ? dispatch(setFilterDataAC(data.filter(i => i.toLowerCase().includes(valueInput.toLowerCase()))))
            : dispatch(setFilterDataAC(data.filter(i => i.includes(valueInput))))
    }

    return (
        <div>
            <button onClick={onClickSubStringHandler}>
                substring
            </button>
        </div>
    )
}