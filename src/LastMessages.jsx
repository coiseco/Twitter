import './LastMessages.css'

function LastMessages(params) {
    return (
        <>
            <div className="last-messages-wrapper">
                <h4 className="last-messages-header">Последние сообщения</h4>
                <div className="messages_list-wrapper" id="messageWrapper">
                    <div className="message-preloader-wrapper" id="message-preloader">
                        <h4 className="message-preloader-text">Загрузка сообщений</h4>
                        <img className="message-preloader-gif" src="./css/img/preloader.gif" alt="анимация загрузки страницы"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastMessages