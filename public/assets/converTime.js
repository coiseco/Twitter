 function convertTime(postDate, currentDate) {
    const differens = (Date.parse(currentDate)/1000) - (Date.parse(postDate)/1000)
    let text = ``
    if(differens <= 60){
        if(differens%10 === 1 && differens !== 11){
            text = `${differens} секунду` 
        } else if((differens%10 > 1 && differens%10 < 5) && (differens !== 12 && differens !== 13 && differens !== 14)){
            text = `${differens} секунды` 
        } else {
            text = `${differens} секунд`
        }
    } else if(differens > 60 && differens <= 3600){
        let secToMin = Math.floor(differens/60)
        if(secToMin%10 === 1 && secToMin !== 11){
            text = `${secToMin} минуту` 
        } else if((secToMin%10 > 1 && secToMin%10 < 5) && (secToMin !== 12 && secToMin !== 13 && secToMin !== 14)){
            text = `${secToMin} минуты` 
        } else {
            text = `${secToMin} минут`
        }
    } else if(differens > 3600 && differens <= 86400){
        let secToHour = Math.floor(differens/3600)
        if(secToHour%10 === 1 && secToHour !== 11){
            text = `${secToHour} час` 
        } else if((secToHour%10 > 1 && secToHour%10 < 5) && (secToHour !== 12 && secToHour !== 13 && secToHour !== 14)){
            text = `${secToHour} часа` 
        } else {
            text = `${secToHour} часов`
        }
    } else if(differens > 86400 && differens <= 604800){
        let secToDay = Math.floor(differens/86400)
        if(secToDay%10 === 1 && secToDay !== 11){
            text = `${secToDay} день` 
        } else if((secToDay%10 > 1 && secToDay%10 < 5) && (secToDay !== 12 && secToDay !== 13 && secToDay !== 14)){
            text = `${secToDay} дня` 
        } else {
            text = `${secToDay} дней`
        }
    } else if(differens > 604800 && differens <= 2629746){
        let secToWeek = Math.floor(differens/604800)
        if(secToWeek === 1){
            text = `${secToWeek} неделю`
        } else {
            text = `${secToWeek} недели`
        }
    } else if(differens > 2629746 && differens <= 31622400){
        let secToYear = Math.floor(differens/2629746)
        if(secToYear%10 === 1 && secToYear !== 11){
            text = `${secToYear} месяц` 
        } else if((secToYear%10 > 1 && secToYear%10 < 5) && (secToYear !== 12 && secToYear !== 13 && secToYear !== 14)){
            text = `${secToYear} месяца` 
        } else {
            text = `${secToYear} месяцев`
        }
    } else {
        text = `более года`
    }
    const timeText = `${text} назад`
    return timeText
    
}

console.log(convertTime("2022-01-01T12:00:00Z", "2023-01-03T12:00:00Z"))