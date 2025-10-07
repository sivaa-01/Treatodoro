const endImg = document.getElementById("end-img");
const endText = document.getElementById("end-text");
const chosenSequence = localStorage.getItem("chosenSequence");

// Map sequence class to image and text
const endMap = {
  "coffee-sequence": {
    img: "Assets/imagesx192/coffee.png",
    text: "Your Coffee is ready !"
  },
  "icecream-sequence": {
    img: "Assets/imagesx192/ice-cream.png",
    text: "Scoop up your reward !"
  },
  "ramen-sequence": {
    img: "Assets/imagesx192/ramen-bowl.png",
    text: "A hot bowl of focus !"
  },
  "cake-sequence": {
    img: "Assets/imagesx192/cake.png",
    text: "Freshly baked Cake !"
  },
  "strawberry-sequence": {
    img: "Assets/imagesx192/strawberry.png",
    text: "Strawberries are ripe !"
  }
};

if (chosenSequence && endMap[chosenSequence]) {
  endImg.src = endMap[chosenSequence].img;
  endText.textContent = endMap[chosenSequence].text;
}

const endSound = document.getElementById("end-sound");
const soundBtn = document.getElementById("sound-btn");
const soundIcon = document.getElementById("sound-icon");

// Autoplay
endSound.play().catch(err => console.log("Autoplay blocked:", err));

// Toggle mute/unmute
soundBtn.addEventListener("click", () => {
  endSound.muted = !endSound.muted;
  soundIcon.src = endSound.muted ? "Assets/mute-btn.svg" : "Assets/unmute-btn.svg";
});

