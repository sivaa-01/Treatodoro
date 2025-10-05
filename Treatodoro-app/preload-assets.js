const assetsToPreload = [
  "Assets/hover-btn/start-btn.svg",
  "Assets/hover-btn/snooze-btn.svg",
  "Assets/hover-btn/dismiss-btn.svg",
  "Assets/hover-btn/pause-btn.svg",
  "Assets/hover-btn/play-btn.svg",
  "Assets/hover-btn/increase-btn.svg",
  "Assets/hover-btn/decrease-btn.svg",
  "Assets/unmute-btn.svg",
  "Assets/mute-btn.svg",

  // Coffee
  "Assets/coffee/state0.png",
  "Assets/coffee/state1.png",
  "Assets/coffee/state2.png",
  "Assets/coffee/state3.png",

  // Ice Cream
  "Assets/icecream/state0.png",
  "Assets/icecream/state1.png",
  "Assets/icecream/state2.png",
  "Assets/icecream/state3.png",
  "Assets/icecream/state4.png",

  // Ramen
  "Assets/ramen/state0.png",
  "Assets/ramen/state1.png",
  "Assets/ramen/state2.png",
  "Assets/ramen/state3.png",

  // Cake
  "Assets/cake/state0.png",
  "Assets/cake/state1.png",
  "Assets/cake/state2.png",
  "Assets/cake/state3.png",

  // Strawberry
  "Assets/strawberry/state0.png",
  "Assets/strawberry/state1.png",
];

assetsToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});
