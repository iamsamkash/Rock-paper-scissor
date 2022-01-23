function reload()
{
    location.reload();
}
function play() {
    document.getElementById("main").style.display = ('flex');
    document.getElementById("mains").style.display = ('block');
}
function x(){
    document.getElementById("htp").style.display=("none");
    
}
function i(){
    document.getElementById("htp").style.display=("flex");

}
function exit() {
    if(document.getElementById("main").style.display==('flex') || document.getElementById("htp").style.display==("flex"))
    {
        document.getElementById("htp").style.display=("none");
        document.getElementById("main").style.display = ('none');
    document.getElementById("mains").style.display = ('none');
    }
    else{
         a = confirm("Are You Sure?");
        if(a==true){
            window.close();
        }
        else{
            
        }
    }

}
// gamelogic
function rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id
    botchoice = notochoice(ranbotrps())
    console.log('computer choice',botchoice)
    result = deciderWinner(humanchoice, botchoice);
    console.log(result)
    message = finalmessage(result);
    console.log(message)
    rpsfrontend(yourchoice.id, botchoice, message);
}
function ranbotrps() {
    return Math.floor(Math.random()*3);
}
function notochoice(number){
    return ['rock','paper','scissor'][number]
}
function deciderWinner(yourchoice, computerchoice)
{
    var rpsdatabase={
        'rock': {'scissor': 1, 'rock': 0.5,'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5,'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5,'rock': 0},

    } 
    var yourScore = rpsdatabase[yourchoice][computerchoice];
    var computerScore = rpsdatabase[computerchoice][yourchoice];

    return [yourScore, computerScore]
}
function finalmessage([yourScore, computerScore])
{
    if(yourScore===0) {
        return {'message': 'You Lost!', 'color': 'red'}
    }else if(yourScore===0.5)
    {
        return {'message': "It's a Tie ", 'color': 'blue'}
    }
    else
    {
        return {'message': "You Won ", 'color': 'Green'}
    }
}
 function rpsfrontend(humanimgchoice, botimgchoice, finalmessage)
 {
     var imagesdatabase ={
         'rock': document.getElementById('rock').src,
         'paper': document.getElementById('paper').src,
         'scissor': document.getElementById('scissor').src,
     }
     //  image remove
    document.getElementById('rock').remove(); 
    document.getElementById('paper').remove(); 
    document.getElementById('scissor').remove(); 
    document.getElementById('mains').remove(); 

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    
    botdiv.innerHTML = "<img src='" + imagesdatabase[botimgchoice] + "' style=' box-shadow: 5px 6px 5px red;' >"
    messagediv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; fontsize: 60px; padding;25px;'>" +finalmessage['message'] +"</h1>"
    humandiv.innerHTML = "<img src='" + imagesdatabase[humanimgchoice] + "' style=' box-shadow: 5px 6px 5px green;' >"
    
    document.getElementById('main').appendChild(humandiv)
    document.getElementById('main').appendChild(botdiv)
    document.getElementById('main').appendChild(messagediv)
    }
