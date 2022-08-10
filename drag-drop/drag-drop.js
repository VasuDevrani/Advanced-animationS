const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    // console.log(draggable);
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    // console.log('dragged');

    e.preventDefault(); // this is req as dropping inside an element is not allowed by default, so cursor appears red
 
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
        // this means infinite dist
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

// function req to allow new oredering else the element will always add at the end
function getDragAfterElement(container, y) {
    // first collect all the elements that are not dragged
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

//   then use reduce(as we need to call the dist calculation callback for each element)
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2; //if y is positive then dragged element is just below the hovered element
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY } //this the infite distance with no element
  ).element; //returning the element
}
