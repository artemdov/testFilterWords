import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {setErrorAC, setFilterDataAC} from "../store/reducer";

const ButtonLength = () => {
    const dispatch = useDispatch()
    const valueInput = useSelector<RootStateType, string>(state => state.data.valueInput)
    const data = useSelector<RootStateType, string[]>(state => state.data.data)
    const error = useSelector<RootStateType, string>(state => state.data.error)
    const filterData = useSelector<RootStateType, string[]>(state => state.data.filterData)


    const onClickLengthHandler = () => {
        +(valueInput) ? dispatch(setFilterDataAC(data.filter(i => i.length > +(valueInput)))) : dispatch(setErrorAC('Enter correct data'))
    }
    return (
        <div className="ButtonLength">
            <button onClick={onClickLengthHandler}>
                length
            </button>

            {filterData.length > 0 && filterData.map((i, id) => {
                return <div key={id}>{i}</div>
            })}
            {error}
        </div>


    )
}
export default ButtonLength