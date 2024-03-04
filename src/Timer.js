import {View} from './View.js'

const Timer = {
    time: 60*60,
    currentTime: 0,
    interval: null,

    timeToMinutes: time => Math.floor(time/60),
    timeToSeconds: time => time % 60,
    formatTime: time => String(time).padStart(2, '0'), //quando o length for menor que o primeiro parâmetro (nesse caso o 2) ele vai preencher o local com o valor colocado no segundo parâmetro (nesse caso o 0)

    init(time){
        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countDown, 1000)
    },
    
    countDown(){
        Timer.currentTime = Timer.currentTime -1

        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        View.render({minutes, seconds})

        if(Timer.currentTime === 0){
            clearInterval(Timer.interval)
            return;
        }
    }
}
export{Timer}