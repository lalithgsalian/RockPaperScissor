let choices = document.querySelectorAll(".option");
let userscore = 0 ;
let compscore = 0 ; 
let message = document.querySelector("#msg-display");
let usersc = document.querySelector("#user-score");
let compsc = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        console.log("userchoice",userchoice);

        let compchoice = gencompchoice();
        console.log(compchoice);

        if(userchoice == compchoice){
            message.innerHTML="draw";
        }
        else{
        let result = playgame(userchoice,compchoice);
        if(result){
            console.log("user wins");
            userscore++;
            message.innerHTML="User won";
            usersc.innerHTML = userscore;
            
        }
        else {
            console.log("computer wins");
            compscore++;
            message.innerHTML = "Computer Won";
            compsc.innerHTML = compscore ;
        }
    }
    })
});


const gencompchoice = (userchoice) => {

    const list =["Rock","Paper","Scissor"];
    let compchoice = Math.floor(Math.random() * 3);
    return list[compchoice];
}

const playgame =(userchoice,compchoice) =>{
    let userwin = true ;
    if(compchoice === "Rock" && userchoice ==="Paper")
        userwin = true ;
    else if(compchoice === "Rock" && userchoice ==="Scissor")
        userwin = false ;
    else if(compchoice === "Paper" && userchoice ==="Scissor")
        userwin = true ;
    else if(compchoice === "Paper" && userchoice ==="Rock")
        userwin = false ;
    else if(compchoice === "Scissor" && userchoice ==="Rock")
        userwin = true ;
    else if(compchoice === "Scissor" && userchoice ==="Paper")
        userwin = false ;
    return userwin ;
}

document.querySelector(".rst-btn").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    usersc.innerHTML = userscore;
    compsc.innerHTML = compscore;
    message.innerHTML = "Game Reset! Start Playing!";
});
