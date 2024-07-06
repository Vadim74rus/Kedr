import './App.css';
import {useEffect} from "react";

window.Telegram.WebApp = undefined;
const tg = window.Telegram.WebApp;


function  App() {
    useEffect(() => {
        tg.ready()
    }, []);
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            work
            <button>Закрыть</button>
        </div>
    );
}
