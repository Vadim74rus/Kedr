import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {initDataUnsafe?.user?.username}
            </span>

        </div>
    );
};

export default Header;