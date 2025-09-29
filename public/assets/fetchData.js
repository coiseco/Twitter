import convertTime from './convertTime.js';


function stringTimeToISO(stringTime) {
  let [date,time] = stringTime.split(' ')
  let [day, month, year] = date.split('.')
  let [hour,minutes] = time.split(':')
  return new Date(year,month - 1 ,day,hour,minutes)
}

fetch('https://burtovoy.github.io/messages.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let messageWrapper = document.querySelector('#messageWrapper')
    let arr = data.messages
    arr.forEach(arrElement => {
      messageWrapper.innerHTML+= `
      <div class="messages_list-message-wrapper">
                    <div class="message-user_avatar-wrapper" id="_${arrElement.user_id}">    
                    </div>
                    <div class="message-user_information_and_message_text-wrapper">
                        <div class="message-user_information-wrapper">
                            <div class="message-user_information">
                                <p class="user_information-user_name text"> ${arrElement.name} </p>
                                <p class="user_information-user_nickname text">${arrElement.mail}</p>
                            </div>
                            <div class="message-time_ago-wrapper">
                                <p class="message-time_ago text">${convertTime(stringTimeToISO(arrElement.date),new Date())}</p>
                            </div>
                        </div>
                        <div class="message-content-wrapper">
                            <p class="message-content-text text"> ${arrElement.message} </p>
                            ${arrElement.img_message? ` <img src="${arrElement.img_message}" alt="mans playing table tennis" class="message-contetn-img">`:``}
                        </div>
                        <div class="message-reactions-wrapper">
                            <div class="message-reaction-wrapper">
                                <img src="./css/img/reactions-arrow.svg" alt="message reactions forwards image"
                                    class="message-reactions-forwards-img">
                                <p class="message-reactions-forwards-counter text"> ${arrElement.quantityReposts} </p>
                            </div>
                            <div class="message-reaction-wrapper">
                                <img src="./css/img/reactions-like.svg" alt="message reactions likes image"
                                    class="message-reactions-likes-img">
                                <p class="message-reactions-likes-counter text">${arrElement.quantityLike}</p>
                            </div>
                            <div class="message-reaction-wrapper">
                                <img src="./css/img/reactions-send.svg" alt="message reactions sends image"
                                    class="message-reactions-sends-img">
                                <p class="message-reactions-sends-counter text">${arrElement.quantityShare}</p>
                            </div>
                        </div>
                    </div>
                </div>
      `
    })
  });

fetch('https://burtovoy.github.io/pictures.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
      data.pictures.forEach(el => {
        let thisWrapper = document.querySelector(`#_${el.user_id}`)
        thisWrapper.innerHTML = `<img src="${el.url}" alt="user avatar image" class="message-user_avatar">`
      })
    })

fetch('https://burtovoy.github.io/statistic.json')
    .then((respons) => {
        return respons.json()
    })
    .then((data) => {
        let scoreWrapper = document.querySelector('#scoreWrapper')
        scoreWrapper.innerHTML = `
            <div class="score-users_counter-wrapper">
                    <h4 class="user_counter-header score-header">${data.statistic.usersRegistr}</h4>
                    <p class="user_counter-text score-text text">Пользователей<br>зарегистрировано</p>
                </div>
                <div class="score-message_counter-wrapper">
                    <h4 class="user_message-header score-header">${data.statistic.writMessages}</h4>
                    <p class="user_message-text score-text text">Сообщений<br>написано</p>
                </div>
                <div class="score-today_message_counter-wrapper">
                    <h4 class="today_message_counter-header score-header">${data.statistic.writToday}</h4>
                    <p class="today_message_counter-text score-text text">Написано<br>сегодня</p>
                </div>
        `
    })    

  