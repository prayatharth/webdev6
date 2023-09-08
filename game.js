
var userChosenPattern =[];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level=0;
var started = false ;




$("body").on("keypress",function(){
while(!started){
    nextSequence();
    started = true;
}
});



function nextSequence(){


userChosenPattern = [];
level+=1;

$("h1").text("Level "+level);

var num =  Math.floor(Math.random()*4);
    
var randomChosenColor = buttonColors[num];
gamePattern.push(randomChosenColor);

console.log("GamePattern = "+gamePattern+"\n");

$('#'+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

animatePress(randomChosenColor);



};


$(".btn").on("click",function(){
    var a = this.id;
    playSound(a);

    userChosenPattern.push(a);
    animatePress(a);
    console.log("User Pattern = " + userChosenPattern+"\n");
    checkAnswer(userChosenPattern.length -1 );
});



function checkAnswer(currentLevel){

    if(userChosenPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("succes");
        if(userChosenPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);

        }
    }
    else{
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        startOver();
    }

}


function playSound(name){
    var son = new Audio('sounds/'+name+'.mp3');
    son.play();
};



function animatePress(currentColor){
    
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColor).removeClass("pressed");

        },100);
}



function startOver(){
    started=false;
    gamePattern = [];
    level =0 ;

}