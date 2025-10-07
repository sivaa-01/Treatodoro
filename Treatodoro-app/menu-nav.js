document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".item img");

  menuItems.forEach(img => {
    img.addEventListener("click", () => {
      // alt text is used as key (coffee, ice-cream, ramen, cake, strawberry)
      const key = img.alt;
      const mapping = imageMap[key]; // comes from image-seq.js

      if (mapping) {
        // Store sequence class
        localStorage.setItem("chosenSequence", mapping.sequenceClass);

        // If this item has a preset time, store it
        if (mapping.time) {
          localStorage.setItem("pomodoroTime", mapping.time);
        } else {
          // In case of custom timer (strawberry), clear time
          localStorage.removeItem("pomodoroTime");
        }
      }
      
    });
  });
});


