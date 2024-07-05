const tg = window.Telegram.WebApp;
tg.initDataUnsafe = undefined;

export function useTelegram(){

       const onClose = () => {
        tg.close()
    }

       const onToggButton = () => {
       if (tg.MainButton.isVisible) {
           tg.MainButton.hide()
       } else {
           tg.MainButton.show
       }
    }

    return {
        onClose,
        onToggButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}