export const elements = {
  list: document.querySelector(".list"),
  audio: document.querySelector("audio"),
  audioSource: document.querySelector("audio source"),
  playingInfo: document.querySelector(".playing .info"),
  form: document.querySelector("form"),
  title: document.querySelector(".songs h2"),
  loader: document.querySelector(".loader"),
};

// create card for every song
export const renderSongs = (songs) => {
  //clean screen
  elements.list.innerHTML = " ";
  songs.forEach((song) => {
    const div = document.createElement("div");

    //and data to card elemennt
    div.dataset.url = song.hub?.actions?.pop()?.uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;

    div.className = "card";
    //content
    div.innerHTML = `
    <figure>
        <img src="${song.images.coverart}" />
        <div class="play">
         <i id="play-btn" class="bi bi-play-fill"></i>
        </div>
    </figure>

    <h4>${song.subtitle}</h4>
    <p>${song.title}</p>`;

    elements.list.appendChild(div);
  });
};

//print screen  playing song data
export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
    
        <img 
        id="info-img"
        src="${song.img}" />
        <div>
          <p>Now playing...</p>
          <h3>${song.title}</h3>
        `;
};

export const updateTitle = (message) => {
  elements.title.innerText = message;
};
