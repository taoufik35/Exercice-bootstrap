  
let choices = document.getElementsByClassName("choice");
let click = document.getElementById("choosenColor");

let col = ["red","blue" ,"yellow" , "green"];

for (let i = 0; i < choices.length; i++) {
  choices[i].style.background = col[i];
  choices[i].onclick = function() {
    let color = this.style.background;
    click.style.background = color;
  };
}
