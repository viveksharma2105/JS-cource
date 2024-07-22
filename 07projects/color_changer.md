#color changer

[click-here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

#solution

const buttons =document.querySelectorAll('.button')
const body = document.body

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener("click", function(e){
    if(e.target.id === "grey" ){
      body.style.background = "grey"
    }
    if(e.target.id === "white" ){
      body.style.background = "white"
    }
    if(e.target.id === "blue" ){
      body.style.background = "blue"
    }
    if(e.target.id === "yellow" ){
      body.style.background = "yellow"
    }
  })

})