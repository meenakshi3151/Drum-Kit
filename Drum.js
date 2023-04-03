   const audio = document.getElementById("crash");
      const snare1 = document.getElementById("snare");
      const tom1 = document.getElementById("tom1");
      const tom2 = document.getElementById("tom2");
      const tom3 = document.getElementById("tom3");
      const tom4 = document.getElementById("tom4");
      const kickbass = document.getElementById("kick");
     
      const wdiv=document.getElementById("w");
      const adiv=document.getElementById("a");
      const sdiv=document.getElementById("s");
      const ddiv=document.getElementById("d");
      const jdiv=document.getElementById("j");
      const kdiv=document.getElementById("k");
      const ldiv=document.getElementById("l");
    const sounds = ["w", "a", "s", "d", "j", "k", "l"];
    main();

function main() {
     
// alert("hi");
      wdiv.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
  // alert("hie");
});
wdiv.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
  // alert("hie");
});
adiv.addEventListener("click", () => {
  snare1.currentTime = 0;
  snare1.play();
  // alert("hie");
});
sdiv.addEventListener("click", () => {
  tom1.currentTime = 0;
  tom1.play();
  // alert("hie");
});
ddiv.addEventListener("click", () => {
  tom2.currentTime = 0;
  tom2.play();
  // alert("hie");
});
jdiv.addEventListener("click", () => {
  tom3.currentTime = 0;
tom3.play();
  // alert("hie");
});
kdiv.addEventListener("click", () => {
  tom4.currentTime = 0;
  tom4.play();
  // alert("hie");
});
ldiv.addEventListener("click", () => {
  kickbass.currentTime = 0;
  kickbass.play();
  // alert("hie");
});

}

document.addEventListener("keypress", function(event) {
  if (event.key === "w") {
    audio.currentTime = 0;
    audio.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "a") {
    snare1.currentTime = 0;
    snare1.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "s") {
    tom1.currentTime = 0;
    tom1.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "d") {
    tom2.currentTime = 0;
    tom2.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "j") {
    tom3.currentTime = 0;
    tom3.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "k") {
    tom4.currentTime = 0;
    tom4.play();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "l") {
document.currentTime = 0;
    kickbass.play();
  }
});
function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 200);
}
