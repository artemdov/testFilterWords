import React, {useEffect} from 'react';
import './App.css';
import {Input} from "./components/input";
import {ButtonSubstring} from "./components/buttonSubstring";
import {Checkbox} from "./components/checkbox";
import ButtonLength from "./components/buttonLength";
import {useDispatch} from "react-redux";
import {getDataTC} from "./store/reducer";



function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataTC())
    },[])



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
