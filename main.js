let slideimages = new Array() 
slideimages[0] = new Image() 
slideimages[0].src = "assets/rock.jpg" 
slideimages[1] = new Image()
slideimages[1].src = "assets/paper.jpg"
slideimages[2] = new Image()
slideimages[2].src = "assets/scissors.jpg"

let step=0
let timeValue = null
let random = computerRandom()

function slideit(){
   if (!document.images)
   return
   document.querySelector('#slide').src = slideimages[step].src
   if (step<2)
   step++
   else
   step=0
   timeValue = setTimeout("slideit()",150)
}

function computerRandom(){
    let chars = ["rock", "paper", "scissors"]
    let randomChars = chars[Math.floor(Math.random() * chars.length)]
    return randomChars
}

document.querySelector("img").style.display = "none"

let buttons = document.querySelectorAll("a")
let playah = ""
document.querySelector("h2").addEventListener("click", (e)=>{
   document.querySelector("img").style.display = "block"
   document.querySelector("h1").innerText = "Rock paper scissors"
   slideit()
   for(let button of buttons){
   button.style.display = "block"
   button.addEventListener("click", ()=>{
       playah = button.className
       random = computerRandom()
       spel()
       
   })
   }
   document.querySelector("h2").innerText = ""
   
})

function win() {
   document.querySelector("h1").innerText = "You chose " + playah + ". " + "You are the winner!"
   document.querySelector("h2").innerText = "Click to play again!"
   for(let button of buttons){
    button.style.display = "none"
   }
}

function lose() {
   document.querySelector("h1").innerText = "You chose " + playah + ". " + "You lost!"
   document.querySelector("h2").innerText = "Click to play again!"
   for(let button of buttons){
    button.style.display = "none"
   }

}

function tie() {
   document.querySelector("h1").innerText = "You chose " + playah + ". " + "It's a draw!"
   document.querySelector("h2").innerText = "Click to play again!"
   for(let button of buttons){
    button.style.display = "none"
   }
}


function spel (){
   document.querySelector('#slide').src = "assets/" + random + ".jpg"
   if(random=="rock" && playah == "paper"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/rock.jpg"
      win()
   }
   else if(random == "paper" && playah == "scissors"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/paper.jpg"
      win()
   }
   else if(random == "scissors" && playah == "rock"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/scissors.jpg"
      win()
   }
   else if(random == "scissors" && playah == "paper"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/scissors.jpg"
      lose()
   }
   else if(random == "paper" && playah == "rock"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/paper.jpg"
      lose()
   }
   else if(random == "rock" && playah == "scissors"){
      clearInterval(timeValue)
    //   document.querySelector('#slide').src = "assets/rock.jpg"
      lose()
   }
   else{
      document.querySelector('#slide').src = "assets/" + random + ".jpg"
      clearInterval(timeValue)
      tie()
   }
}