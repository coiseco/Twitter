export default function postSize(string) {

    let switcher = true
    let splitedString = string.slice()
    
    while(switcher){

        if(splitedString.includes("<http") ){
            
            splitedString = string.split('<').join(' ').split('>').join(' ')
        
        }else if(splitedString.includes("http")){
            
            let arrFromString = splitedString.split(' ')
            let resArr = []
            
            for(let el of arrFromString){
                if(!el.includes('http')){
                        resArr.push(arrFromString[arrFromString.indexOf(el)])
                    }
            }
            return string =  resArr.join(' ').length
        } else {
            switcher = false
            return string.length
        }

        
    }
    
    
}

console.log(postSize('Всем привет!<https://github.com>q<https://github.com>Привет! еее https://github.com'))