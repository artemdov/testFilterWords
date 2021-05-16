import React, {ChangeEvent} from 'react';
import {setValueInputAC} from "../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";


export const Input = () => {


    const dispatch = useDispatch()
    const valueInput = useSelector<RootStateType, string>(state => state.data.valueInput)

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueInputAC(e.currentTarget.value))
    }

    return (
        <div>
            <input type='text' placeholder='search' onChange={changeInput} value={valueInput}/>
        </div>
    )
}