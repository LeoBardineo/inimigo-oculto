const botao = document.getElementById('botao')
const links = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
'https://feijoadasimulator.top/br/sources/1349.png',
'https://www.youtube.com/watch?v=kfVsfOSbJY0',
'https://www.youtube.com/watch?v=H1kLZCiLEs8',
'https://www.youtube.com/watch?v=YEVEsn7rgyU']
num = 0

botao.addEventListener('click', () => {
  window.open(links[num])
  num === links.length-1 ? num = 0 : num += 1
})