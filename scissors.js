let user_score = 0;
let comp_score = 0;
let userwin = true;
let msg = document.querySelector("#mesg");
const userpara = document.querySelector("#userscore");
const comppara = document.querySelector("#compscore");


const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand_index = Math.floor(Math.random() * 3);
    return options[rand_index];
};

const drawgame = () => {

    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "rgb(1, 25, 54)";
};

const showwinner = (userwin, userchoice, comp_choice) => {
    if (userwin) {
     
        user_score++;
        userpara.innerText = user_score;
        msg.innerText = `You win! ${userchoice} beat ${comp_choice}`;
        msg.style.backgroundColor = "Green";
    }
    else {
        comp_score++;
        comppara.innerText = comp_score;
      

        msg.innerText = "You lost.";
        msg.style.backgroundColor = "Red";
        msg.innerText = `You lost.  ${comp_choice} beat ${userchoice}`;
    }
}
const playgame = (userchoice) => {

    const comp_choice = compchoice();

    if (userchoice === comp_choice) {
        drawgame();
    }
    else {

        if (userchoice === "rock") {
            userwin = comp_choice === "paper" ? false : true;
            userwin = comp_choice === "scissor" ? true : false;
        }

        else if (userchoice === "paper") {
            userwin = comp_choice === "scissor" ? false : true;
            userwin = comp_choice === "rock" ? true : false;
        }
        else {
            userwin = comp_choice === "rock" ? false : true;
            userwin = comp_choice === "paper" ? true : false;
        }
        showwinner(userwin, userchoice, comp_choice);
    }

};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    })
});