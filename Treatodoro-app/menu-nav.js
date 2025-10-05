document.addEventListener("DOMContentLoaded", () => {
  // Select the <img> elements inside .item (they have the alt text we use as key)
  const menuItems = document.querySelectorAll(".item img");

  menuItems.forEach(img => {
    img.addEventListener("click", () => {
      // alt text is used as key (coffee, ice-cream, ramen, cake, strawberry)
      const key = img.alt;
      const mapping = imageMap[key]; // comes from image-seq.js

      if (mapping) {
        // Store sequence class so timer/end pages can use it
        localStorage.setItem("chosenSequence", mapping.sequenceClass);

        // If this item has a default pomodoro time, store it
        if (mapping.time) {
          localStorage.setItem("pomodoroTime", mapping.time);
        } else {
          // In case of custom timer (strawberry), clear time so custom-timer can set it
          localStorage.removeItem("pomodoroTime");
        }
      }
      // Navigation still happens via <a href=...> naturally
    });
  });
});

