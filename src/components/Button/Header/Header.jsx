import React from 'react';
import Button from "../Button";
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button";


const Header = () => {
    const {user} = useTelegram();

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>

        </div>
    );
};

export default Header;