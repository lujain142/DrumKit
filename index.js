 function Audiopaly(key){
  switch(key){
    case'w':
     // اضافة الصوت
  let tom1=new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
// 2
  case'a':
     // اضافة الصوت
  let tom2=new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
// 3
case's':
     // اضافة الصوت
  let tom3=new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  // 4
  case'd':
     // اضافة الصوت
  let tom4=new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  // 5
  case'j':
     // اضافة الصوت
  let tom5=new Audio("sounds/snare.mp3");
  tom5.play();
  break;
  // 6
  case'k':
     // اضافة الصوت
  let tom6=new Audio("sounds/kick-bass.mp3");
  tom6.play();
  break;
  // 7
  case'l':
     // اضافة الصوت
  let tom7=new Audio("sounds/crash.mp3");
  tom7.play();
  break;
 }
}



//  الضغط على الكيبورد
document.addEventListener("keypress", function(event) {
  let key = event.key;
Audiopaly(key);

  
});

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let key=this.innerHTML;
Audiopaly(key);
//add class
document.querySelectorAll("button")[i].classList.add("pressed");
//remoce class
setTimeout(function(){
  document.querySelectorAll("button")[i].classList.remove("pressed");}, 1000);
  });


}
