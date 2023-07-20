const buttonElement = document.querySelector(".btn")
const closeIconElement = document.querySelector(".close-icon")
const trailerContainerElement = document.querySelector(".trailer-container")
const videoElement = document.querySelector("video")

buttonElement.addEventListener("click", () => {
  trailerContainerElement.classList.remove("active")
});

closeIconElement.addEventListener("click", ()=> {
  trailerContainerElement.classList.add("active")
  videoElement();
  videoElement.currentTime = 0;
});