const tg = window.Telegram.WebApp;
tg.initDataUnsafe = undefined;
tg.MainButton = undefined;

export function useTelegram(){

       const onClose = () => {
        tg.close()
    }

       const onToggButton = () => {
       if (tg.MainButton.isVisible) {
           tg.MainButton.hide();
       } else {
           tg.MainButton.show();
       }
    }

    let onToggleButton;
    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}