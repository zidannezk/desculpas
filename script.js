function aceitar() {
  document.getElementById('resposta').innerText = "Você me fez o homem mais feliz do mundo! ❤️";
}

function fugir() {
  const btn = document.getElementById('naoBtn');
  const container = document.querySelector('.container');

  const containerRect = container.getBoundingClientRect();
  const maxX = containerRect.width - btn.offsetWidth;
  const maxY = containerRect.height - btn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.position = 'absolute';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}

// Adiciona suporte ao toque e clique em dispositivos móveis
document.addEventListener('DOMContentLoaded', () => {
  const btnNao = document.getElementById('naoBtn');

  // Mouseover (desktop)
  btnNao.addEventListener('mouseover', fugir);

  // Touchstart e click (celular)
  btnNao.addEventListener('click', function (e) {
    e.preventDefault(); // Impede que o clique registre normalmente
    fugir();
  });
});
function aceitar() {
  document.getElementById('resposta').innerText = "Você me fez muito feliz meu chupisquinho! ❤️";

  const video = document.getElementById('videoNosso');
  video.style.display = 'block';
  video.play(); // inicia o vídeo automaticamente
}
function aceitar() {
  // Exibe a mensagem de agradecimento
  document.getElementById('resposta').innerText = "Você me fez muito feliz meu chupisquinho! ❤️";

  // Exibe o vídeo
  const video = document.getElementById('videoNosso');
  video.style.display = 'block'; // Faz o vídeo aparecer
  video.play(); // Começa o vídeo automaticamente
}


