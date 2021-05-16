import React, {useEffect} from 'react';
import './App.css';
import {Input} from "./components/input";
import {ButtonSubstring} from "./components/buttonSubstring";
import {Checkbox} from "./components/checkbox";
import ButtonLength from "./components/buttonLength";
import {useDispatch, useSelector} from "react-redux";
import {getDataTC} from "./store/reducer";
import {RootStateType} from "./store/store";



function App() {

    const dispatch = useDispatch()
    const valueCheckbox = useSelector<RootStateType, boolean>(state => state.data.valueCheckbox)


    useEffect(() => {
        dispatch(getDataTC())
    },[dispatch])



    return (
        <div className="App">
            <Input/>
            <Checkbox/>
            <ButtonSubstring/>
            <ButtonLength/>
        </div>
    )
}

export default App;
