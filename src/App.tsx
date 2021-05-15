import React from 'react';
import './App.css';
import {Input} from "./components/input";
import {ButtonSubstring} from "./components/buttonSubstring";
import {Checkbox} from "./components/checkbox";
import ButtonLength from "./components/buttonLength";

function App() {
    return (
        <div className="App">
            <Input/>
            <Checkbox/>
            <ButtonLength/>
            <ButtonSubstring/>

        </div>
    )
}

export default App;
