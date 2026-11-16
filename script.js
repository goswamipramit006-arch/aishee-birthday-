const openBtn = document.getElementById('openBtn');
const surprise = document.getElementById('surprise');
const welcome = document.getElementById('welcome');
const cakeBtn = document.getElementById('cakeBtn');
const flames = document.getElementById('flames');
const wishMessage = document.getElementById('wishMessage');

openBtn.addEventListener('click', () => {
  welcome.classList.add('hidden');
  surprise.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
  confettiBurst(65);
});

cakeBtn.addEventListener('click', () => {
  flames.textContent = '✨  ✨  ✨';
  wishMessage.textContent = 'Wish sent to the universe! Now go make it happen, birthday superstar. 💫';
  confettiBurst(45);
});

document.getElementById('confettiBtn').addEventListener('click', () => confettiBurst(85));
document.getElementById('againBtn').addEventListener('click', () => {
  window.scrollTo({top:0,behavior:'smooth'});
  confettiBurst(55);
});

function confettiBurst(amount) {
  const pieces = ['💗','✨','🎉','🌸','⭐','💜'];
  for (let i=0; i<amount; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = pieces[Math.floor(Math.random()*pieces.length)];
    piece.style.left = Math.random()*100 + 'vw';
    piece.style.animationDuration = (2.2 + Math.random()*2.8) + 's';
    piece.style.fontSize = (12 + Math.random()*15) + 'px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5200);
  }
}
