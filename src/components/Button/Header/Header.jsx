import React from 'react';

const Header = () => {
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
            </span>

        </div>
    );
};

export default Header;