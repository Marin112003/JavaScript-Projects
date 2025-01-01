const arcaneVideo = document.querySelector(".arcane-video");
const toggleSwitch = document.querySelector(".toggle-input");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const label = document.querySelector("label")

playButton.addEventListener("click", () => {
  arcaneVideo.play();
  label.style.left = "-1px";
});

pauseButton.addEventListener("click", ()=> {
    arcaneVideo.pause();
    label.style.left = "101px";
})
