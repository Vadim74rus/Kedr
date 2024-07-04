import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";


function  App() {
    const {onToggButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);


    return (
        <div className="App">
            <button onClick={onToggButton}>toggle</button>
        </div>
    );
}

export default App;