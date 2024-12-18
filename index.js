let random=Math.floor(Math.random()*100+1)
let count=0
let game_status = 1
const hints=document.getElementById('hint')
const attempt=document.getElementById('attempts')
console.log(random)

function check(){
    if(game_status == 1){
        count++
        const obj1=document.forms[0]
        let val=obj1.val.value
        console.log(val)
        if(val==random){
            hint.innerHTML='Hint : Guess is Correct'
            console.log('Guess is Correct')
            console.log('Attempts:'+count)
            game_status=0
            document.getElementById('check_btn').innerHTML='Reset'
        }
        else if(val<random){
            hint.innerHTML='Hint : Guess is lower'
            console.log('Guess is lower')
            console.log('Attempts:'+count)
        }
        else{
            hint.innerHTML='Hint : Guess is higher'
            console.log('Guess is higher')
            console.log('Attempts:'+count)
        }
        
        attempts.innerHTML='No. of Attempts:'+count
    }
    else{
        reset()
        val=0
        game_status=1
    }
}
function reset(){
    document.getElementById('check_btn').innerHTML='check'
    count=0
    attempts.innerHTML='Attempts:'+count
    random=Math.floor(Math.random()*100+1)
    console.log(random)
    document.getElementsByTagName('input')[0].value = null
}
