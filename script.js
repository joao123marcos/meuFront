function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')){
        html.classList.remove('light');
    }else{
        html.classList.add('light');
    } um outra maneira é a linha abaixo*/

  html.classList.toggle("light")
}
