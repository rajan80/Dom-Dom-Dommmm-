document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.innerText = "Add Square";
  document.body.appendChild(btn);
  let flexContainer = document.createElement("div");
  flexContainer.classList.add("container");
  document.body.appendChild(flexContainer);
  let squareNum = 1;

  btn.addEventListener("click", function () {
    let box = document.createElement("div");
    box.classList.add("square");
    document.body.appendChild(box);
    box.id = squareNum;
    box.innerText = squareNum;

    box.addEventListener("click", function () {
      box.style.backgroundColor = getRandomColor();
    });
    box.addEventListener("dblClick", function () {
      if (box.id % 2 === 0) {
        alert("Even");
      } else {
        alert("Odd");
      }
    });

    flexContainer.appendChild(box);
    squareNum++;
  });

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
