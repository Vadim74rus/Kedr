import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import * as tg from "react-dom/test-utils";

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