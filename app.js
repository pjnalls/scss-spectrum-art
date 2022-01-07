const createDivElement = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDivElement("canvas"),
    triangle = createDivElement("triangle");

  canvas.appendChild(triangle);

  root.appendChild(canvas);
};

main();
