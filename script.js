function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando oclulos de sol, e jaqueta preta e fundo azul")
  } else {
    img.setAttribute(
      "alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
  }
}

/* Opcao do vito, sem necessidade de alterar o html

var botao = document.querySelector("#switch")

botao.onclick = function () {
  const html = document.documentElement

 
  html.classList.toggle('light')
}
*/
