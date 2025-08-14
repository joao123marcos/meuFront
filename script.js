function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-joao.png")
    img.setAttribute("alt", "Foto com fundo claro e o João Marcos " + 
        "nela de camisa branca")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do João Marcos de Óculos,"+
        " blusa de frio e fundo escuro")
  }
}
