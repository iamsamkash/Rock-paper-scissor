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

// random no code

function ranbotrps() {
    return Math.floor(Math.random()*3);
}

// bot choice random

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
    
    // document.getElementById('rock').remove(); 
    // document.getElementById('paper').remove(); 
    // document.getElementById('scissor').remove(); 
    // document.getElementById('mains').remove(); 

    // div remove (image remove and div remove both works perfectly)

    document.getElementById('content1').remove();
    document.getElementById('content2').remove();
    document.getElementById('content3').remove();
    var humandiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var botdiv = document.createElement('div');
   
    // given the div's there inhtml code
    
    botdiv.innerHTML = "<img src='" + imagesdatabase[botimgchoice] + "' style=' box-shadow: 5px 6px 5px red;' >"
    messagediv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size: 60px; padding: 70px; text-align: center;'>" +finalmessage['message'] +"</h1>"
    humandiv.innerHTML = "<img src='" + imagesdatabase[humanimgchoice] + "' style=' box-shadow: 5px 6px 5px green;' >"
    
    // this is the form in which the result is announced

    document.getElementById('main').appendChild(humandiv)
    document.getElementById('main').appendChild(messagediv)
    document.getElementById('main').appendChild(botdiv)
    }
