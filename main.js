import { API } from "./scripts/api.js";
import { elements, renderPlayingInfo, updateTitle } from "./scripts/ui.js";

//create api class example
const api = new API();

document.addEventListener(
  "DOMContentLoaded",
  async () => await api.getPopular()
);

//get music as a parameter
const playMusic = (url) => {
  elements.audioSource.src = url;

  //load music
  elements.audio.load();
  //play music
  elements.audio.play();
};

//
const handleClick = (e) => {
  if (e.target.id === "play-btn") {
    const parent = e.target.parentElement.parentElement.parentElement;

    //playind music data
    renderPlayingInfo(parent.dataset);

    //play music
    playMusic(parent.dataset.url);
  }
};

//watch click event
document.addEventListener("click", handleClick);

const animatePhoto = (e) => {
  const img = document.querySelector(".info img");
  img.className = "animate";
};

const stopAnimation = (e) => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
};
//watching music playing
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);

//watch form event in main js
elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) return;

  //update title
  updateTitle(`Results for: ${query}`);

  api.searchMusic(query);
});
