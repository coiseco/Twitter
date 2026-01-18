import './Banner.css'

function Banner({text,logo}) {
    return (
        <>
           <div className="banner-wrapper">
                <div className="banner-logo-wrapper" style={{display: logo == 'true'? 'flex':'none'}}>
                    <img src="./css/img/logo.svg" alt="image of blue dolphin, its logo of this web-page"/>
                </div>
                <div className="banner-header-wrapper">
                    <h3 className="banner-header-text">{text}</h3>
                </div>
                <div className="banner-buttons-wrapper">
                    <button className="banner-buttons-sign_up_button button sign-in-button">Зарегистрироваться</button>
                    <button className="banner-buttons-sign_in_button button log-in-button">Войти</button>
                </div>
                <div className="banner-img-wrapper" style={{display: logo == 'true'? 'flex':'none'}}>
                    <img src="./css/img/banner-img.png"
                        alt="image group of people, seating near the fire in camp and telling histories "/>
                </div>
                <div className="banner-score-wrapper" id="scoreWrapper" style={{display: logo == 'true'? 'flex':'none'}}>
                </div>
        </div>
        </>
    )
}



export default Banner