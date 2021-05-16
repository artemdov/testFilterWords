import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {setValueCheckboxAC} from "../store/reducer";


export const Checkbox = () => {

    const dispatch = useDispatch()
    const valueCheckbox = useSelector<RootStateType, boolean>(state => state.data.valueCheckbox)

    const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueCheckboxAC(e.currentTarget.checked))
    }

    return (
        <div>
            <input type='checkbox' onChange={changeCheckbox} checked={valueCheckbox}/>
        </div>
    )
}