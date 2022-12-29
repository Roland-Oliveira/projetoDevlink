function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // }

  // pegar a tag image
  const image = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adcionar a imagem light
    image.setAttribute("scr", "assets/avatar-light.png")
  } else {
    image.setAttribute("scr", "assets/Avatar.png")
  }
}
