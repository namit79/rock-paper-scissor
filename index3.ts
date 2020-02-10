
function game() {                                                                                                      //game method definition starts
  let userScore: number = 0;
  let expertScore: number = 0; 
                                                                       
   function update() {                                                                                                 //method update definition starts
     let userScore: any = document.querySelector(".user p");
        let expertScore :any= document.querySelector(".expert p");
             userScore.textContent = userScore;
             expertScore.textContent = expertScore;
          }                                                                                                             //method update definition ends

  function compare(userChoice: string, expertChoice: string):void {                                                     //compare method definition starts
    
   
    if (userChoice === expertChoice) {
      alert("It is a tie");
    } 
    if (userChoice === "SCISSOR") {                        
      if (expertChoice === "ROCK") {
        alert("expert wins");
        expertScore++;
        update();
      } else {
        alert("user wins");
        userScore++;
        update();
      }
    }
    if (userChoice === "PAPER") {
      if (expertChoice === "SCISSOR") {
        alert("expert wins");
        expertScore++;
        update();
      } else {
        alert("user wins");
        userScore++;
        update();
      }
    }
    if (userChoice === "ROCK") {
      if (expertChoice === "SCISSOR") {
        alert("user wins");
        userScore++;
        update();
      } else {
        alert("expert wins");
        expertScore++;
        update();
      }
    }
  } 
  function startGame() {                                                                                              //startGame method definition starts
    let choices:any = document.querySelectorAll(".buttons button");
        let userHand :any = document.querySelector(".user-hand");
         let expertHand:any = document.querySelector(".expert-hand");
               let expertOptions:string[] = ["ROCK", "PAPER", "SCISSOR"];

choices.forEach(option => {
option.addEventListener("click", function() {     
let number: number = Math.floor(Math.random() * 3);
let expertChoice: string = expertOptions[number];


     compare(this.textContent, expertChoice);                                                                           //comparemethod call
     userHand.src = `./${this.textContent}.jpg`;                                                                       //image updation//
     expertHand.src = `./${expertChoice}.jpg`;                          
});
});                                                                                                                      //loop end
}              //method startGame definition ends                                                       
  startGame();
}                                                                                                                         //game method  definition ends
game();                                                                                                                    //calling game method